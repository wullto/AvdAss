const STORAGE_KEY = "avdelningsassistent-state-v2";
let storageStatus = "local";

function emitStorageStatus(status) {
  storageStatus = status;
  window.dispatchEvent(
    new CustomEvent("app-storage-status", {
      detail: { status },
    }),
  );
}

function getLocalState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

function setLocalState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getConfig() {
  return window.APP_CONFIG ?? {};
}

function isSupabaseReady() {
  return Boolean(
    getConfig().SYNC_ENABLED !== false &&
    window.supabase &&
      getConfig().SUPABASE_URL &&
      getConfig().SUPABASE_ANON_KEY,
  );
}

function createSupabaseClient() {
  if (!isSupabaseReady()) {
    return null;
  }

  return window.supabase.createClient(
    getConfig().SUPABASE_URL,
    getConfig().SUPABASE_ANON_KEY,
  );
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

window.appStorage = {
  getStatus() {
    return storageStatus;
  },

  async loadState() {
    const localState = getLocalState();
    const client = createSupabaseClient();

    if (!client) {
      emitStorageStatus(getConfig().SYNC_ENABLED === false ? "paused" : "local");
      return localState;
    }

    try {
      emitStorageStatus("syncing");
      const { data, error } = await client
        .from("app_state")
        .select("state")
        .eq("id", getConfig().APP_STATE_ID || "default")
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (data?.state) {
        setLocalState(data.state);
        emitStorageStatus("synced");
        return data.state;
      }

      emitStorageStatus("synced");
      return localState;
    } catch (error) {
      console.error("Kunde inte ladda fran Supabase:", error);
      emitStorageStatus("error");
      return localState;
    }
  },

  async saveState(state) {
    setLocalState(state);
    const client = createSupabaseClient();

    if (!client) {
      emitStorageStatus(getConfig().SYNC_ENABLED === false ? "paused" : "local");
      return;
    }

    const payload = {
      id: getConfig().APP_STATE_ID || "default",
      state,
      updated_at: new Date().toISOString(),
    };

    const snapshot = {
      state_id: getConfig().APP_STATE_ID || "default",
      snapshot_date: getTodayKey(),
      state,
      updated_at: new Date().toISOString(),
    };

    try {
      emitStorageStatus("syncing");
      const [{ error: stateError }, { error: snapshotError }] = await Promise.all([
        client.from("app_state").upsert(payload),
        client
          .from("app_snapshots")
          .upsert(snapshot, { onConflict: "state_id,snapshot_date" }),
      ]);

      if (stateError) {
        throw stateError;
      }

      if (snapshotError) {
        throw snapshotError;
      }

      emitStorageStatus("synced");
    } catch (error) {
      console.error("Kunde inte spara till Supabase:", error);
      emitStorageStatus("error");
    }
  },
};
