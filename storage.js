const STORAGE_KEY = "avdelningsassistent-state-v2";

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

window.appStorage = {
  async loadState() {
    return getLocalState();
  },

  async saveState(state) {
    setLocalState(state);
  },
};
