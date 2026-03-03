const demoState = {
  patients: [
    {
      id: crypto.randomUUID(),
      name: "Sal 3A / Lars",
      arrivalDate: "2026-02-27",
      reason: "STEMI",
      history: "Hypertoni, Tidigare NSTEMI",
      labs: "Troponin 3200, Hb 132, Krea 94",
      exams: "PCI genomford, EKG med regredierande ST-hojningar",
      status: "Trott men stabil, latt rassel basalt bilateralt",
      timestamps: {
        arrivalDate: "2026-03-01T08:00:00.000Z",
        reason: "2026-03-01T08:00:00.000Z",
        history: "2026-03-01T08:00:00.000Z",
        labs: "2026-03-01T08:00:00.000Z",
        exams: "2026-03-01T08:00:00.000Z",
        status: "2026-03-01T08:00:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 7B / Britta",
      arrivalDate: "2026-02-28",
      reason: "Hjartsviktsexacerbation",
      history: "FFL, CKD 3, Diabetes typ 2",
      labs: "NT-proBNP 8200, Krea 122, Na 136",
      exams: "Lungrontgen med stasbild, EKO bestalld",
      status: "Battre andning efter diuretika men fortsatt perifera odem",
      timestamps: {
        arrivalDate: "2026-03-01T09:00:00.000Z",
        reason: "2026-03-01T09:00:00.000Z",
        history: "2026-03-01T09:00:00.000Z",
        labs: "2026-03-01T09:00:00.000Z",
        exams: "2026-03-01T09:00:00.000Z",
        status: "2026-03-01T09:00:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 5C / Ingrid",
      arrivalDate: "2026-03-02",
      reason: "Pneumoni",
      history: "KOL, Osteoporos, Tidigare rokare",
      labs: "CRP 214, LPK 16.2, Sat 91 % pa 2 L",
      exams: "Lungrontgen med hogerunderlobsinfiltrat, blododling tagen",
      status: "Hostig, subfebril, nagot andningspaverkad men kontaktbar",
      timestamps: {
        arrivalDate: "2026-03-02T07:45:00.000Z",
        reason: "2026-03-02T07:45:00.000Z",
        history: "2026-03-02T07:45:00.000Z",
        labs: "2026-03-02T07:45:00.000Z",
        exams: "2026-03-02T07:45:00.000Z",
        status: "2026-03-02T07:45:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 2D / Oskar",
      arrivalDate: "2026-03-01",
      reason: "Akut njursvikt",
      history: "Hypertoni, Hjarstsvikt, Gikt",
      labs: "Krea 286, K 5.6, Urea 21",
      exams: "Bladderscan utan retention, ulj njurar bestalld",
      status: "Mattligt trott, torra slemhinnor, diures oklar senaste dygnet",
      timestamps: {
        arrivalDate: "2026-03-01T10:30:00.000Z",
        reason: "2026-03-01T10:30:00.000Z",
        history: "2026-03-01T10:30:00.000Z",
        labs: "2026-03-01T10:30:00.000Z",
        exams: "2026-03-01T10:30:00.000Z",
        status: "2026-03-01T10:30:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 8A / Fatima",
      arrivalDate: "2026-03-03",
      reason: "GI-blodning",
      history: "Formaksflimmer, Ulcussjukdom, Jarnbrist",
      labs: "Hb 84, BT 98/62, Laktat 2.1",
      exams: "Gastroskopi planerad, BAS-test klart",
      status: "Blekt men cirkulatoriskt stabil, lite yr vid mobilisering",
      timestamps: {
        arrivalDate: "2026-03-03T06:50:00.000Z",
        reason: "2026-03-03T06:50:00.000Z",
        history: "2026-03-03T06:50:00.000Z",
        labs: "2026-03-03T06:50:00.000Z",
        exams: "2026-03-03T06:50:00.000Z",
        status: "2026-03-03T06:50:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 1B / Kerstin",
      arrivalDate: "2026-02-26",
      reason: "Strokeutredning",
      history: "Hyperlipidemi, Hypertoni, Tidigare TIA",
      labs: "LDL 3.8, Hb 129, Krea 78",
      exams: "DT hjarna utan blasning, karotisduplex bestalld",
      status: "Neurologiskt oforandrad, latt ordletningssvarigheter kvarstar",
      timestamps: {
        arrivalDate: "2026-02-26T11:15:00.000Z",
        reason: "2026-02-26T11:15:00.000Z",
        history: "2026-02-26T11:15:00.000Z",
        labs: "2026-02-26T11:15:00.000Z",
        exams: "2026-02-26T11:15:00.000Z",
        status: "2026-02-26T11:15:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 4D / Johan",
      arrivalDate: "2026-03-03",
      reason: "Sepsis efter UVI",
      history: "BPH, Typ 2-diabetes, CKD 3",
      labs: "CRP 188, LPK 18.4, Krea 146",
      exams: "Urinodling skickad, blododling skickad, DT buk overvags",
      status: "Febril, takykard men piggare efter vatska och antibiotika",
      timestamps: {
        arrivalDate: "2026-03-03T05:55:00.000Z",
        reason: "2026-03-03T05:55:00.000Z",
        history: "2026-03-03T05:55:00.000Z",
        labs: "2026-03-03T05:55:00.000Z",
        exams: "2026-03-03T05:55:00.000Z",
        status: "2026-03-03T05:55:00.000Z",
      },
    },
  ],
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Ring kardiologkonsult om fortsatt dubbel trombocythamning",
      patient: "Sal 3A / Lars",
      done: false,
      completedAt: null,
      createdAt: "2026-03-01T08:10:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Skriv remiss for EKO och folj diures efter lunch",
      patient: "Sal 7B / Britta",
      done: false,
      completedAt: null,
      createdAt: "2026-03-01T09:10:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Folj blododlingssvar och stallningstag till byte av antibiotika",
      patient: "Sal 5C / Ingrid",
      done: false,
      completedAt: null,
      createdAt: "2026-03-03T08:20:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Kontakta njurjour om fortsatt stigande krea och hyperkalemi",
      patient: "Sal 2D / Oskar",
      done: false,
      completedAt: null,
      createdAt: "2026-03-03T08:35:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Skriv blodbestallning och kontrollera om Hb tas om efter lunch",
      patient: "Sal 8A / Fatima",
      done: false,
      completedAt: null,
      createdAt: "2026-03-03T09:05:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Folj karotisduplex och planera sekundarprofylax i epikris",
      patient: "Sal 1B / Kerstin",
      done: false,
      completedAt: null,
      createdAt: "2026-03-03T09:25:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Kontrollera urinproduktion efter KAD-sattning",
      patient: "Sal 4D / Johan",
      done: false,
      completedAt: null,
      createdAt: "2026-03-03T09:40:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Skriv remiss for hjart-eko",
      patient: "Sal 7B / Britta",
      done: true,
      completedAt: "2026-03-03T08:55:00.000Z",
      createdAt: "2026-03-03T08:05:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Bestall kontroll-Hb efter lunch",
      patient: "Sal 8A / Fatima",
      done: true,
      completedAt: "2026-03-03T10:15:00.000Z",
      createdAt: "2026-03-03T07:20:00.000Z",
    },
    {
      id: crypto.randomUUID(),
      title: "Prata med sjukgymnast om mobiliseringsniva",
      patient: "Sal 3A / Lars",
      done: true,
      completedAt: "2026-03-03T11:05:00.000Z",
      createdAt: "2026-03-03T08:45:00.000Z",
    },
  ],
  selectedPatientId: null,
  currentView: "patients",
  isNavOpen: false,
  isPatientFormOpen: false,
  isTaskFormOpen: false,
  selectedTaskId: null,
  editingTaskId: null,
  taskFilters: {
    patient: "",
  },
};

const initialState = {
  patients: [],
  tasks: [],
  selectedPatientId: null,
  currentView: "patients",
  isNavOpen: false,
  isPatientFormOpen: false,
  isTaskFormOpen: false,
  collapsedSections: {},
  selectedTaskId: null,
  editingPatientId: null,
  editingTaskId: null,
  activePatientField: null,
  patientFieldDraft: "",
  inlineTaskPatientId: null,
  inlineTaskDraft: "",
  taskFilters: {
    patient: "",
  },
};

let state = structuredClone(initialState);
let pendingScrollTarget = null;
let pendingPatientFieldFocus = false;
let pendingPatientTaskFocus = false;
let highlightedPatientId = null;
let highlightedTaskId = null;
const patientFieldOrder = ["reason", "history", "labs", "exams", "status"];

const appShell = document.querySelector(".app-shell");
const patientForm = document.querySelector("#patient-form");
const patientList = document.querySelector("#patient-list");
const completedTaskList = document.querySelector("#completed-task-list");
const seedDemoButton = document.querySelector("#seed-demo");
const clearPatientsButton = document.querySelector("#clear-patients");
const togglePatientFormButton = document.querySelector("#toggle-patient-form");
const patientFormPanel = document.querySelector("#patient-form-panel");
const topNav = document.querySelector("#top-nav");
const toggleNavButton = document.querySelector("#toggle-nav-button");
const navTabs = Array.from(document.querySelectorAll("[data-view-tab]"));
const views = Array.from(document.querySelectorAll("[data-view]"));
const todayDate = document.querySelector("#today-date");
const completedNavCount = document.querySelector("#completed-nav-count");
const clearCompletedButton = document.querySelector("#clear-completed-button");
const historyInput = document.querySelector("#history-input");
const labInput = document.querySelector("#lab-input");
const examInput = document.querySelector("#exam-input");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const patientFormTitle = document.querySelector("#patient-form-title");
const savePatientButton = document.querySelector("#save-patient-button");
const floatingActionButton = document.querySelector("#floating-action-button");

patientForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(patientForm);

  const patientPayload = {
    name: String(formData.get("name")).trim(),
    arrivalDate: String(formData.get("arrivalDate")).trim(),
    reason: String(formData.get("reason")).trim(),
    history: String(formData.get("history")).trim(),
    labs: String(formData.get("labs")).trim(),
    exams: String(formData.get("exams")).trim(),
    status: String(formData.get("status")).trim(),
    timestamps: buildPatientTimestamps(),
  };

  if (state.editingPatientId) {
    const previousPatient = state.patients.find(
      (patient) => patient.id === state.editingPatientId,
    );

    state.patients = state.patients.map((patient) =>
      patient.id === state.editingPatientId
        ? { ...patient, ...patientPayload }
        : patient,
    );

    if (previousPatient && previousPatient.name !== patientPayload.name) {
      state.tasks = state.tasks.map((task) =>
        task.patient === previousPatient.name
          ? { ...task, patient: patientPayload.name }
          : task,
      );
    }

    state.selectedPatientId = state.editingPatientId;
  } else {
    const newPatient = {
      id: crypto.randomUUID(),
      ...patientPayload,
    };

    state.patients.unshift(newPatient);
    state.selectedPatientId = newPatient.id;
  }

  state.isPatientFormOpen = false;
  state.editingPatientId = null;
  state.activePatientField = null;
  state.patientFieldDraft = "";

  patientForm.reset();
  markPatientHighlight(state.selectedPatientId);
  saveAndRender();
});

togglePatientFormButton.addEventListener("click", () => {
  state.isPatientFormOpen = !state.isPatientFormOpen;
  if (!state.isPatientFormOpen) {
    resetPatientFormState();
  } else {
    stopEditingPatient();
    pendingScrollTarget = "patient";
  }
  render();
});

toggleNavButton.addEventListener("click", () => {
  state.isNavOpen = !state.isNavOpen;
  render();
});

floatingActionButton?.addEventListener("click", () => {
  if (state.currentView === "patients") {
    state.isPatientFormOpen = true;
    stopEditingPatient();
    pendingScrollTarget = "patient";
  }

  render();
});

cancelEditButton.addEventListener("click", () => {
  resetPatientFormState();
  render();
});

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.currentView = tab.dataset.viewTab;
    state.isNavOpen = false;
    saveAndRender();
  });
});

seedDemoButton.addEventListener("click", () => {
  state = normalizeState(structuredClone(demoState));
  state.selectedPatientId = state.patients[0]?.id ?? null;
  saveAndRender();
});

clearPatientsButton?.addEventListener("click", () => {
  const hasData = state.patients.length > 0 || state.tasks.length > 0;

  if (!hasData) {
    return;
  }

  const confirmed = window.confirm(
    "Rensa alla patienter och alla kopplade uppgifter?",
  );

  if (!confirmed) {
    return;
  }

  state.patients = [];
  state.tasks = [];
  state.selectedPatientId = null;
  state.selectedTaskId = null;
  state.editingPatientId = null;
  state.activePatientField = null;
  state.patientFieldDraft = "";
  state.inlineTaskPatientId = null;
  state.inlineTaskDraft = "";
  state.collapsedSections = {};
  saveAndRender();
});

clearCompletedButton?.addEventListener("click", () => {
  const today = getTodayKey();
  const hasCompletedToday = state.tasks.some(
    (task) => task.done && task.completedAt?.startsWith(today),
  );

  if (!hasCompletedToday) {
    return;
  }

  const confirmed = window.confirm("Rensa alla uppgifter som ar avklarade idag?");

  if (!confirmed) {
    return;
  }

  state.tasks = state.tasks.filter(
    (task) => !(task.done && task.completedAt?.startsWith(today)),
  );
  state.selectedTaskId = null;
  saveAndRender();
});

function normalizeState(parsed) {
  if (!parsed) {
    return structuredClone(initialState);
  }

  return {
    ...structuredClone(initialState),
    ...parsed,
    currentView: parsed.currentView === "tasks" ? "patients" : (parsed.currentView ?? "patients"),
    patients: Array.isArray(parsed.patients)
      ? parsed.patients.map((patient) => ({
          ...patient,
          history: Array.isArray(patient.history)
            ? patient.history.join(", ")
            : String(patient.history || ""),
          labs: Array.isArray(patient.labs)
            ? patient.labs.join(", ")
            : String(patient.labs || ""),
          exams: Array.isArray(patient.exams)
            ? patient.exams.join(", ")
            : String(patient.exams || ""),
          timestamps: {
            arrivalDate: patient.timestamps?.arrivalDate ?? null,
            reason: patient.timestamps?.reason ?? null,
            history: patient.timestamps?.history ?? null,
            labs: patient.timestamps?.labs ?? null,
            exams: patient.timestamps?.exams ?? null,
            status: patient.timestamps?.status ?? null,
          },
        }))
      : [],
    tasks: Array.isArray(parsed.tasks)
      ? parsed.tasks.map((task) => ({
          ...task,
          completedAt: task.completedAt ?? null,
          createdAt: task.createdAt ?? null,
        }))
      : [],
    collapsedSections: parsed.collapsedSections ?? {},
  };
}

function persistState() {
  return window.appStorage?.saveState
    ? window.appStorage.saveState(state)
    : Promise.resolve();
}

function saveAndRender() {
  render();
  void persistState();
}

function render() {
  renderTodayDate();
  renderNavCounts();
  renderNavigation();
  renderViewFocus();
  renderFloatingActionButton();
  renderPatientForm();
  renderPatients();
  renderCompletedTasks();
  flushPendingScroll();
  flushPendingInlineStatusFocus();
  flushPendingPatientTaskFocus();
}

function renderViewFocus() {
  const hasPatientFocus = state.currentView === "patients" && state.isPatientFormOpen;

  appShell?.classList.toggle("patient-form-focus", hasPatientFocus);
}

function renderFloatingActionButton() {
  if (!floatingActionButton) {
    return;
  }

  const hidden = state.currentView === "completed";
  floatingActionButton.hidden = hidden;

  if (hidden) {
    return;
  }

  floatingActionButton.textContent = "Ny patient";
}

function flushPendingInlineStatusFocus() {
  if (!pendingPatientFieldFocus) {
    return;
  }

  pendingPatientFieldFocus = false;
  requestAnimationFrame(() => {
    document.querySelector("[data-inline-patient-input]")?.focus();
  });
}

function flushPendingPatientTaskFocus() {
  if (!pendingPatientTaskFocus) {
    return;
  }

  pendingPatientTaskFocus = false;
  requestAnimationFrame(() => {
    document.querySelector("[data-inline-task-input]")?.focus();
  });
}

function flushPendingScroll() {
  if (!pendingScrollTarget) {
    return;
  }

  const targetPanel =
    pendingScrollTarget === "patient" ? patientFormPanel : null;
  const targetInput = pendingScrollTarget === "patient" ? patientForm.elements.name : null;

  pendingScrollTarget = null;

  if (!targetPanel || targetPanel.hidden) {
    return;
  }

  requestAnimationFrame(() => {
    targetPanel.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    targetInput?.focus();
  });
}

function renderNavCounts() {
  const completedCount = state.tasks.filter((task) => task.done).length;
  if (completedNavCount) {
    completedNavCount.textContent = `(${completedCount})`;
  }
}

function renderTodayDate() {
  const now = new Date();
  todayDate.textContent = now.toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderNavigation() {
  topNav.classList.toggle("nav-open", state.isNavOpen);
  toggleNavButton.textContent = state.isNavOpen ? "Stang" : "Meny";

  navTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.viewTab === state.currentView);
  });

  views.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === state.currentView);
  });
}

function renderPatientForm() {
  patientFormPanel.hidden = !state.isPatientFormOpen;
  togglePatientFormButton.textContent = state.isPatientFormOpen
    ? "Stang formularet"
    : "Ny patient";
  patientFormTitle.textContent = "Ny patient";
  savePatientButton.textContent = "Spara patient";
  cancelEditButton.hidden = true;
}

function resetPatientFormState() {
  state.isPatientFormOpen = false;
  state.activePatientField = null;
  state.patientFieldDraft = "";
  patientForm.reset();
}

function startEditingPatient(patientId) {
  const patient = state.patients.find((entry) => entry.id === patientId);

  if (!patient) {
    return;
  }

  state.editingPatientId = patient.id;
  state.selectedPatientId = patient.id;
  state.activePatientField = null;
  state.patientFieldDraft = "";
  state.isPatientFormOpen = false;
}

function stopEditingPatient() {
  state.editingPatientId = null;
  state.activePatientField = null;
  state.patientFieldDraft = "";
}

function startInlinePatientTask(patientId) {
  state.inlineTaskPatientId = patientId;
  state.inlineTaskDraft = "";
  pendingPatientTaskFocus = true;
}

function stopInlinePatientTask() {
  state.inlineTaskPatientId = null;
  state.inlineTaskDraft = "";
}

function saveInlinePatientTask(patientId) {
  const patient = state.patients.find((entry) => entry.id === patientId);
  const title = state.inlineTaskDraft.trim();

  if (!patient || !title) {
    stopInlinePatientTask();
    render();
    return;
  }

  state.tasks.push({
    id: crypto.randomUUID(),
    title,
    patient: patient.name,
    done: false,
    completedAt: null,
    createdAt: new Date().toISOString(),
  });

  const newTaskId = state.tasks[state.tasks.length - 1].id;
  stopInlinePatientTask();
  markTaskHighlight(newTaskId);
  saveAndRender();
}

function startPatientFieldEdit(patientId, field) {
  const patient = state.patients.find((entry) => entry.id === patientId);

  if (!patient) {
    return;
  }

  state.editingPatientId = patientId;
  state.activePatientField = field;
  state.patientFieldDraft = String(patient[field] || "");
  pendingPatientFieldFocus = true;
}

function savePatientField(patientId) {
  if (!state.activePatientField) {
    return;
  }

  const field = state.activePatientField;
  const nextValue = state.patientFieldDraft.trim();
  const previousPatient = state.patients.find((patient) => patient.id === patientId);

  state.patients = state.patients.map((patient) =>
    patient.id === patientId
      ? {
          ...patient,
          [field]: nextValue,
          timestamps: {
            ...patient.timestamps,
            [field]: new Date().toISOString(),
          },
        }
      : patient,
  );

  if (field === "name" && previousPatient && previousPatient.name !== nextValue) {
    state.tasks = state.tasks.map((task) =>
      task.patient === previousPatient.name ? { ...task, patient: nextValue } : task,
    );
  }

  state.activePatientField = null;
  state.patientFieldDraft = "";
  markPatientHighlight(patientId);
  saveAndRender();
}

function savePatientFieldAndAdvance(patientId) {
  if (!state.activePatientField) {
    return;
  }

  const currentField = state.activePatientField;
  const currentIndex = patientFieldOrder.indexOf(currentField);
  const nextField =
    currentIndex >= 0 && currentIndex < patientFieldOrder.length - 1
      ? patientFieldOrder[currentIndex + 1]
      : null;

  savePatientField(patientId);

  if (nextField) {
    startPatientFieldEdit(patientId, nextField);
    render();
  } else {
    stopEditingPatient();
    render();
  }
}

function renderEditablePatientField(patient, field, label, options = {}) {
  const isEditingField =
    state.editingPatientId === patient.id && state.activePatientField === field;
  const value = patient[field] || "";
  const displayValue =
    field === "arrivalDate" ? formatDate(value) : value || "Ej ifyllt";
  const multiline = options.multiline ?? false;
  const type = options.type || "text";
  const stopAttr = 'data-stop-card-toggle="true"';
  const displayClass = options.displayClass || "item-copy";
  const inlineEditor = options.inlineEditor ?? false;

  if (isEditingField) {
    const inputMarkup = multiline
      ? `<textarea ${stopAttr} data-inline-patient-input="true" rows="${options.rows || 2}">${state.patientFieldDraft}</textarea>`
      : `<input ${stopAttr} data-inline-patient-input="true" type="${type}" value="${state.patientFieldDraft}" />`;

    return `
      <div class="inline-status-editor ${inlineEditor ? "inline-status-editor-inline" : ""}" ${stopAttr}>
        ${inputMarkup}
        <div class="item-actions inline-status-actions">
          <button class="chip-button" data-action="save-patient-field" data-id="${patient.id}" type="button">Spara</button>
          <button class="chip-button" data-action="cancel-patient-field" data-id="${patient.id}" type="button">Avbryt</button>
        </div>
      </div>
    `;
  }

  if (state.editingPatientId === patient.id) {
    return `
      <button
        class="inline-edit-display ${displayClass}"
        data-action="edit-patient-field"
        data-id="${patient.id}"
        data-field="${field}"
        type="button"
      >
        ${label ? `<strong>${label}:</strong> ` : ""}${displayValue}
      </button>
    `;
  }

  return `<p class="${displayClass}">${label ? `<strong>${label}:</strong> ` : ""}${displayValue}</p>`;
}

function togglePatientSection(patientId, section) {
  const patientSections = state.collapsedSections[patientId] ?? {};
  state.collapsedSections = {
    ...state.collapsedSections,
    [patientId]: {
      ...patientSections,
      [section]: !patientSections[section],
    },
  };
}

function isSectionCollapsed(patientId, section) {
  return Boolean(state.collapsedSections[patientId]?.[section]);
}

function renderSectionBlock(patientId, label, section, content) {
  return `
    <div class="detail-section">
      <div class="detail-heading-row">
        <p class="item-copy detail-heading"><strong>${label}:</strong></p>
      </div>
      <div class="detail-section-content">
        ${content}
      </div>
    </div>
  `;
}

function markPatientHighlight(patientId) {
  highlightedPatientId = patientId;
  renderPatients();
  setTimeout(() => {
    if (highlightedPatientId === patientId) {
      highlightedPatientId = null;
      renderPatients();
    }
  }, 1400);
}

function markTaskHighlight(taskId) {
  highlightedTaskId = taskId;
  renderTasks();
  renderCompletedTasks();
  setTimeout(() => {
    if (highlightedTaskId === taskId) {
      highlightedTaskId = null;
      renderTasks();
      renderCompletedTasks();
    }
  }, 1400);
}

function movePatient(patientId, direction) {
  const currentIndex = state.patients.findIndex((patient) => patient.id === patientId);

  if (currentIndex === -1) {
    return;
  }

  const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

  if (targetIndex < 0 || targetIndex >= state.patients.length) {
    return;
  }

  const nextPatients = [...state.patients];
  const [movedPatient] = nextPatients.splice(currentIndex, 1);
  nextPatients.splice(targetIndex, 0, movedPatient);
  state.patients = nextPatients;
}

function renderPatients() {
  patientList.innerHTML = "";

  if (state.patients.length === 0) {
    patientList.innerHTML =
      '<article class="template-output empty-state">Inga patienter an. Skapa en ny patient och bygg upp dagen steg for steg.</article>';
    return;
  }

  state.patients.forEach((patient) => {
    const patientIndex = state.patients.findIndex((entry) => entry.id === patient.id);
    const patientOpenTasks = state.tasks.filter(
      (task) => task.patient === patient.name && !task.done,
    );
    const patientTaskCount = patientOpenTasks.length;
    const patientTasks = patientOpenTasks;
    const card = document.createElement("article");
    const isOpen = patient.id === state.selectedPatientId;
    const historyMarkup = renderEditablePatientField(patient, "history", "", { multiline: true, rows: 2 });
    const labsMarkup = renderEditablePatientField(patient, "labs", "", { multiline: true, rows: 2 });
    const examsMarkup = renderEditablePatientField(patient, "exams", "", { multiline: true, rows: 2 });
    const hasInlineTask = state.inlineTaskPatientId === patient.id;
    const tasksMarkup =
      patientTasks.length > 0
        ? `<div class="task-chip-list">${patientTasks
            .map(
              (task) =>
                `<article class="mini-task-card">
                  <span class="mini-task-r">R</span>
                  <span class="mini-task-text">${task.title}</span>
                  <button
                    class="chip-button mini-task-complete-button"
                    data-action="toggle-task"
                    data-id="${task.id}"
                    type="button"
                  >
                    Klar
                  </button>
                </article>`,
            )
            .join("")}</div>`
        : hasInlineTask
          ? ""
          : '<p class="item-copy">Inga uppgifter kopplade.</p>';
    const inlineTaskMarkup =
      hasInlineTask
        ? `
          <article class="mini-task-card mini-task-card-editing" data-stop-card-toggle="true">
            <input
              data-inline-task-input="true"
              type="text"
              value="${state.inlineTaskDraft}"
              placeholder="Skriv ny uppgift"
            />
          </article>
        `
        : "";
    const taskSummary =
      patientTasks.length === 0
        ? "Inga uppgifter"
        : patientTasks.length === 1
          ? patientTasks[0].title
          : `${patientTasks.length} uppgifter`;
    const isEditingPatient = state.editingPatientId === patient.id;
    const statusMarkup = renderEditablePatientField(patient, "status", "", {
      multiline: true,
      rows: 3,
    });
    card.className = `item-card patient-card ${isOpen ? "active" : ""} ${highlightedPatientId === patient.id ? "item-card-highlight" : ""}`;
    card.dataset.patientId = patient.id;
    card.innerHTML = `
      <div class="item-meta">
        <span class="pill ${patientTaskCount > 0 ? "pill-alert" : ""}">${patientTaskCount} oppna uppgifter</span>
      </div>
      ${
        isEditingPatient
          ? renderEditablePatientField(patient, "name", "", { multiline: false })
              .replace('class="inline-edit-display"', 'class="inline-edit-display inline-edit-title"')
          : `<h3 class="item-title">${patient.name}</h3>`
      }
      <div class="detail-section summary-section compact-summary ${isOpen ? "collapsed" : ""}">
        <p class="item-copy"><strong>S:</strong> ${patient.reason || "Ej ifyllt"}</p>
        <p class="item-copy"><strong>B:</strong> ${patient.history || "Ej ifyllt"}</p>
        <p class="item-copy"><strong>A:</strong> ${patient.status || "Ej ifyllt"}</p>
      </div>
      <div class="detail-grid ${isOpen ? "expanded" : "collapsed"}">
        <div class="detail-section detail-section-stack detail-section-no-border">
          ${renderEditablePatientField(patient, "reason", "S")}
          ${
            state.editingPatientId === patient.id
              ? renderEditablePatientField(patient, "arrivalDate", "Ankomstdatum", {
                  type: "date",
                  displayClass: "item-copy item-copy-secondary",
                })
              : `<p class="item-copy item-copy-secondary"><strong>Ankomstdatum:</strong> ${formatDate(patient.arrivalDate)}</p>`
          }
        </div>
        ${renderSectionBlock(patient.id, "B", "history", historyMarkup)}
        ${renderSectionBlock(patient.id, "Labb", "labs", labsMarkup)}
        ${renderSectionBlock(patient.id, "Undersokningar", "exams", examsMarkup)}
        <div class="detail-section detail-section-a">
          <div class="detail-heading-row">
            <p class="item-copy detail-heading"><strong>A:</strong></p>
          </div>
          ${statusMarkup}
        </div>
        ${renderSectionBlock(patient.id, "R", "tasks", `${tasksMarkup}${inlineTaskMarkup}`)}
      </div>
      <div class="item-actions detail-actions ${isOpen ? "" : "hidden-actions"}">
        <button class="chip-button" data-action="edit-patient" data-id="${patient.id}" type="button">
          ${isEditingPatient ? "Klar" : "Redigera"}
        </button>
        <button class="chip-button" data-action="new-task-for-patient" data-id="${patient.id}" type="button">Ny uppgift</button>
        ${
          isEditingPatient
            ? `
              <button
                class="chip-button"
                data-action="move-patient-up"
                data-id="${patient.id}"
                type="button"
                ${patientIndex === 0 ? "disabled" : ""}
              >
                Flytta upp
              </button>
              <button
                class="chip-button"
                data-action="move-patient-down"
                data-id="${patient.id}"
                type="button"
                ${patientIndex === state.patients.length - 1 ? "disabled" : ""}
              >
                Flytta ned
              </button>
              <button class="chip-button" data-action="copy-patient" data-id="${patient.id}" type="button">Kopiera sammanfattning</button>
              <button class="chip-button" data-action="delete-patient" data-id="${patient.id}" type="button">Ta bort</button>
            `
            : ""
        }
      </div>
    `;
    patientList.appendChild(card);
  });
}

function renderTasks() {
  return;
}

function renderCompletedTasks() {
  completedTaskList.innerHTML = "";
  const today = getTodayKey();
  const todaysCompleted = state.tasks
    .filter((task) => task.done && task.completedAt?.startsWith(today))
    .sort((left, right) => (right.completedAt || "").localeCompare(left.completedAt || ""));

  if (clearCompletedButton) {
    clearCompletedButton.hidden = todaysCompleted.length === 0;
  }

  if (todaysCompleted.length === 0) {
    completedTaskList.innerHTML =
      '<article class="template-output empty-state">Inget ar klarmarkerat an idag.</article>';
    return;
  }

  todaysCompleted.forEach((task) => {
    const card = document.createElement("article");
    const isOpen = state.selectedTaskId === task.id;
    card.className = `item-card task-card task-card-done ${highlightedTaskId === task.id ? "item-card-highlight" : ""}`;
    card.dataset.taskId = task.id;
    card.innerHTML = `
      <div class="task-title-row">
        <h3 class="item-title task-title">${task.patient ? `${task.patient}: ` : ""}${task.title}</h3>
        <span class="done-check" aria-label="Avklarad">✓</span>
      </div>
      <div class="task-details ${isOpen ? "expanded" : "collapsed"}">
        <div class="item-meta">
          ${task.patient ? `<span class="pill">${task.patient}</span>` : ""}
          <span class="pill">Klar</span>
        </div>
        <p class="item-copy">Klarmarkerad: ${formatCompletedAt(task.completedAt)}</p>
      </div>
    `;
    completedTaskList.appendChild(card);
  });
}

function buildPatientSummary(patient, taskLines) {
  return [
    `${patient.name}`,
    `Ankomstdatum: ${formatDate(patient.arrivalDate)}`,
    `S: ${patient.reason || "-"}`,
    `B: ${patient.history || "-"}`,
    `Labb: ${patient.labs || "-"}`,
    `Undersokningar: ${patient.exams || "-"}`,
    `A: ${patient.status || "-"}`,
    "",
    "Dagens uppgifter:",
    taskLines,
  ].join("\n");
}

function buildPatientTimestamps() {
  const now = new Date().toISOString();

  return {
    arrivalDate: now,
    reason: now,
    history: now,
    labs: now,
    exams: now,
    status: now,
  };
}

function formatDate(value) {
  if (!value) {
    return "Ej ifyllt";
  }

  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${year}-${month}-${day}`;
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatCompletedAt(value) {
  if (!value) {
    return "Okand tid";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

document.addEventListener("click", async (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const { action, id } = target.dataset;

  if (!action || !id) {
    const patientCard = target.closest(".patient-card");
    const taskCard = target.closest(".task-card");

    if (
      patientCard instanceof HTMLElement &&
      !target.closest("[data-action]") &&
      !target.closest("[data-stop-card-toggle]")
    ) {
      const patientId = patientCard.dataset.patientId;
      const nextSelectedPatientId =
        state.selectedPatientId === patientId ? null : patientId;

      if (state.editingPatientId && state.editingPatientId !== nextSelectedPatientId) {
        stopEditingPatient();
      }

      state.selectedPatientId =
        nextSelectedPatientId;
      saveAndRender();
    }

    if (taskCard instanceof HTMLElement && !target.closest("[data-action]")) {
      const taskId = taskCard.dataset.taskId;
      state.selectedTaskId = state.selectedTaskId === taskId ? null : taskId;
      saveAndRender();
    }
    return;
  }

  if (action === "delete-patient") {
    const confirmed = window.confirm(
      "Ar du saker pa att du vill ta bort patienten? Kopplade uppgifter tas ocksa bort.",
    );

    if (!confirmed) {
      return;
    }

    const deletedPatient = state.patients.find((patient) => patient.id === id);
    state.patients = state.patients.filter((patient) => patient.id !== id);
    state.tasks = deletedPatient
      ? state.tasks.filter((task) => task.patient !== deletedPatient.name)
      : state.tasks;
    if (state.selectedPatientId === id) {
      state.selectedPatientId = state.patients[0]?.id ?? null;
    }
  }

  if (action === "edit-patient") {
    if (state.editingPatientId === id) {
      stopEditingPatient();
    } else {
      startEditingPatient(id);
    }
  }

  if (action === "edit-patient-field") {
    const field = target.dataset.field;
    if (field) {
      startPatientFieldEdit(id, field);
    }
  }

  if (action === "save-patient-field") {
    savePatientField(id);
    return;
  }

  if (action === "cancel-patient-field") {
    state.activePatientField = null;
    state.patientFieldDraft = "";
  }

  if (action === "move-patient-up") {
    movePatient(id, "up");
    markPatientHighlight(id);
    saveAndRender();
    return;
  }

  if (action === "move-patient-down") {
    movePatient(id, "down");
    markPatientHighlight(id);
    saveAndRender();
    return;
  }

  if (action === "new-task-for-patient") {
    startInlinePatientTask(id);
    render();
    return;
  }

  if (action === "jump-patient") {
    state.selectedPatientId = id;
    state.currentView = "patients";
  }

  if (action === "toggle-task") {
    const task = state.tasks.find((entry) => entry.id === id);
    const taskCard = target.closest(".task-card");

    if (task && !task.done && taskCard instanceof HTMLElement) {
      taskCard.classList.add("task-card-completing");
      setTimeout(() => {
        state.tasks = state.tasks.map((entry) =>
          entry.id === id
            ? {
                ...entry,
                done: true,
                completedAt: new Date().toISOString(),
              }
            : entry,
        );
        markTaskHighlight(id);
        saveAndRender();
      }, 180);
      return;
    }

    state.tasks = state.tasks.map((entry) =>
      entry.id === id
        ? {
            ...entry,
            done: !entry.done,
            completedAt: entry.done ? null : new Date().toISOString(),
          }
        : entry,
    );
  }

  if (action === "toggle-patient-section") {
    const section = target.dataset.section;
    if (section) {
      togglePatientSection(id, section);
    }
  }

  if (action === "copy-patient") {
    const patient = state.patients.find((entry) => entry.id === id);

    if (patient) {
      const patientTasks = state.tasks.filter((task) => task.patient === patient.name);
      const taskLines =
        patientTasks.length > 0
          ? patientTasks
              .map((task) => `- [${task.done ? "x" : " "}] ${task.title}`)
              .join("\n")
          : "- Inga kopplade uppgifter";
      const copyText = buildPatientSummary(patient, taskLines);
      try {
        await navigator.clipboard.writeText(copyText);
        target.textContent = "Kopierat";
        setTimeout(() => {
          target.textContent = "Kopiera sammanfattning";
        }, 1200);
      } catch {
        target.textContent = "Kunde inte kopiera";
      }
    }
  }

  saveAndRender();
});

document.addEventListener("input", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.matches("[data-inline-patient-input]")) {
    state.patientFieldDraft = target.value;
  }

  if (target.matches("[data-inline-task-input]")) {
    state.inlineTaskDraft = target.value;
  }
});

document.addEventListener("keydown", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (
    target.matches("[data-inline-patient-input]") &&
    event.key === "Enter"
  ) {
    event.preventDefault();
    if (state.editingPatientId && state.activePatientField) {
      if (patientFieldOrder.includes(state.activePatientField)) {
        savePatientFieldAndAdvance(state.editingPatientId);
      } else {
        savePatientField(state.editingPatientId);
      }
    }
  }

  if (target.matches("[data-inline-task-input]") && event.key === "Enter") {
    event.preventDefault();
    if (state.inlineTaskPatientId) {
      saveInlinePatientTask(state.inlineTaskPatientId);
    }
  }
});

async function initializeApp() {
  const loadedState = await (window.appStorage?.loadState
    ? window.appStorage.loadState()
    : Promise.resolve(null));
  state = normalizeState(loadedState);
  render();
}

void initializeApp();
