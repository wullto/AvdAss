const demoState = {
  patients: [
    {
      id: crypto.randomUUID(),
      name: "Sal 3A / Lars",
      avatar: "👨",
      arrivalDate: "2026-02-27",
      reason: "STEMI",
      history: ["Hypertoni", "Tidigare NSTEMI"],
      labs: ["Troponin 3200", "Hb 132", "Krea 94"],
      exams: ["PCI genomford", "EKG med regredierande ST-hojningar"],
      status: "Trott men stabil, latt rassel basalt bilateralt",
      news: "3",
      timestamps: {
        arrivalDate: "2026-03-01T08:00:00.000Z",
        reason: "2026-03-01T08:00:00.000Z",
        history: "2026-03-01T08:00:00.000Z",
        labs: "2026-03-01T08:00:00.000Z",
        exams: "2026-03-01T08:00:00.000Z",
        status: "2026-03-01T08:00:00.000Z",
        news: "2026-03-01T08:00:00.000Z",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Sal 7B / Britta",
      avatar: "👩",
      arrivalDate: "2026-02-28",
      reason: "Hjartsviktsexacerbation",
      history: ["FFL", "CKD 3", "Diabetes typ 2"],
      labs: ["NT-proBNP 8200", "Krea 122", "Na 136"],
      exams: ["Lungrontgen med stasbild", "EKO bestalld"],
      status: "Battre andning efter diuretika men fortsatt perifera odem",
      news: "2",
      timestamps: {
        arrivalDate: "2026-03-01T09:00:00.000Z",
        reason: "2026-03-01T09:00:00.000Z",
        history: "2026-03-01T09:00:00.000Z",
        labs: "2026-03-01T09:00:00.000Z",
        exams: "2026-03-01T09:00:00.000Z",
        status: "2026-03-01T09:00:00.000Z",
        news: "2026-03-01T09:00:00.000Z",
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
  ],
  selectedPatientId: null,
  currentView: "patients",
  isNavOpen: false,
  isPatientFormOpen: false,
  isTaskFormOpen: false,
  draftHistory: [],
  draftLabs: [],
  draftExams: [],
  syncStatus: "local",
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
  draftHistory: [],
  draftLabs: [],
  draftExams: [],
  syncStatus: "local",
  editingPatientId: null,
  editingTaskId: null,
  taskFilters: {
    patient: "",
  },
};

let state = structuredClone(initialState);
let pendingScrollTarget = null;

const patientForm = document.querySelector("#patient-form");
const taskForm = document.querySelector("#task-form");
const patientList = document.querySelector("#patient-list");
const taskList = document.querySelector("#task-list");
const completedTaskList = document.querySelector("#completed-task-list");
const seedDemoButton = document.querySelector("#seed-demo");
const patientOptions = document.querySelector("#patient-options");
const togglePatientFormButton = document.querySelector("#toggle-patient-form");
const patientFormPanel = document.querySelector("#patient-form-panel");
const topNav = document.querySelector("#top-nav");
const toggleNavButton = document.querySelector("#toggle-nav-button");
const toggleTaskFormButton = document.querySelector("#toggle-task-form");
const taskFormPanel = document.querySelector("#task-form-panel");
const navTabs = Array.from(document.querySelectorAll("[data-view-tab]"));
const views = Array.from(document.querySelectorAll("[data-view]"));
const todayDate = document.querySelector("#today-date");
const syncStatus = document.querySelector("#sync-status");
const tasksNavCount = document.querySelector("#tasks-nav-count");
const completedNavCount = document.querySelector("#completed-nav-count");
const addHistoryButton = document.querySelector("#add-history-button");
const historyInput = document.querySelector("#history-input");
const historyListPreview = document.querySelector("#history-list-preview");
const addLabButton = document.querySelector("#add-lab-button");
const labInput = document.querySelector("#lab-input");
const labListPreview = document.querySelector("#lab-list-preview");
const addExamButton = document.querySelector("#add-exam-button");
const examInput = document.querySelector("#exam-input");
const examListPreview = document.querySelector("#exam-list-preview");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const patientFormTitle = document.querySelector("#patient-form-title");
const savePatientButton = document.querySelector("#save-patient-button");
const taskTitleInput = taskForm.elements.title;
const taskPatientInput = taskForm.elements.patient;
const taskFormTitle = document.querySelector("#task-form-title");
const cancelTaskEditButton = document.querySelector("#cancel-task-edit-button");
const saveTaskButton = taskForm.querySelector('button[type="submit"]');
const taskFilterPatient = document.querySelector("#task-filter-patient");

addHistoryButton.addEventListener("click", () => {
  addDraftHistory();
});

historyInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  addDraftHistory();
});

addLabButton.addEventListener("click", () => {
  addDraftLab();
});

labInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  addDraftLab();
});

addExamButton.addEventListener("click", () => {
  addDraftExam();
});

examInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  addDraftExam();
});

patientForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(patientForm);

  const patientPayload = {
    name: String(formData.get("name")).trim(),
    avatar: String(formData.get("avatar")).trim() || "🧑",
    arrivalDate: String(formData.get("arrivalDate")).trim(),
    reason: String(formData.get("reason")).trim(),
    history: [...state.draftHistory],
    labs: [...state.draftLabs],
    exams: [...state.draftExams],
    status: String(formData.get("status")).trim(),
    news: String(formData.get("news")).trim(),
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
  state.draftHistory = [];
  state.draftLabs = [];
  state.draftExams = [];
  state.editingPatientId = null;

  patientForm.reset();
  saveAndRender();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const submittedPatient = String(formData.get("patient")).trim();
  const submittedTitle = String(formData.get("title")).trim();

  if (state.editingTaskId) {
    state.tasks = state.tasks.map((task) =>
      task.id === state.editingTaskId
        ? {
            ...task,
            title: submittedTitle,
            patient: submittedPatient,
          }
        : task,
    );
    resetTaskFormState();
    saveAndRender();
    return;
  }

  state.tasks.unshift({
    id: crypto.randomUUID(),
    title: submittedTitle,
    patient: submittedPatient,
    done: false,
    completedAt: null,
    createdAt: new Date().toISOString(),
  });

  taskForm.reset();
  taskPatientInput.value = submittedPatient;
  saveAndRender();
  taskTitleInput.focus();
});

togglePatientFormButton.addEventListener("click", () => {
  state.isPatientFormOpen = !state.isPatientFormOpen;
  if (!state.isPatientFormOpen) {
    resetPatientFormState();
  } else {
    pendingScrollTarget = "patient";
  }
  render();
});

toggleNavButton.addEventListener("click", () => {
  state.isNavOpen = !state.isNavOpen;
  render();
});

toggleTaskFormButton.addEventListener("click", () => {
  state.isTaskFormOpen = !state.isTaskFormOpen;
  if (!state.isTaskFormOpen) {
    resetTaskFormState();
  } else {
    pendingScrollTarget = "task";
  }
  render();
});

cancelEditButton.addEventListener("click", () => {
  resetPatientFormState();
  render();
});

cancelTaskEditButton.addEventListener("click", () => {
  resetTaskFormState();
  render();
});

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.currentView = tab.dataset.viewTab;
    state.isNavOpen = false;
    saveAndRender();
  });
});

[taskFilterPatient].forEach((filter) => {
  filter.addEventListener("change", () => {
    state.taskFilters = {
      patient: taskFilterPatient.value,
    };
    saveAndRender();
  });
});

seedDemoButton.addEventListener("click", () => {
  state = normalizeState(structuredClone(demoState));
  state.selectedPatientId = state.patients[0]?.id ?? null;
  saveAndRender();
});

function normalizeState(parsed) {
  if (!parsed) {
    return structuredClone(initialState);
  }

  return {
    ...structuredClone(initialState),
    ...parsed,
    patients: Array.isArray(parsed.patients)
      ? parsed.patients.map((patient) => ({
          ...patient,
          avatar: patient.avatar || "🧑",
          history: Array.isArray(patient.history)
            ? patient.history
            : patient.history
              ? String(patient.history)
                  .split(",")
                  .map((entry) => entry.trim())
                  .filter(Boolean)
              : [],
          labs: Array.isArray(patient.labs)
            ? patient.labs
            : patient.labs
              ? String(patient.labs)
                  .split(",")
                  .map((lab) => lab.trim())
                  .filter(Boolean)
              : [],
          exams: Array.isArray(patient.exams)
            ? patient.exams
            : patient.exams
              ? String(patient.exams)
                  .split(",")
                  .map((exam) => exam.trim())
                  .filter(Boolean)
              : [],
          timestamps: {
            arrivalDate: patient.timestamps?.arrivalDate ?? null,
            reason: patient.timestamps?.reason ?? null,
            history: patient.timestamps?.history ?? null,
            labs: patient.timestamps?.labs ?? null,
            exams: patient.timestamps?.exams ?? null,
            status: patient.timestamps?.status ?? null,
            news: patient.timestamps?.news ?? null,
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
  renderSyncStatus();
  renderNavCounts();
  renderNavigation();
  renderPatientForm();
  renderTaskForm();
  renderPatientOptions();
  renderTaskFilters();
  renderPatients();
  renderTasks();
  renderCompletedTasks();
  flushPendingScroll();
}

function flushPendingScroll() {
  if (!pendingScrollTarget) {
    return;
  }

  const targetPanel =
    pendingScrollTarget === "patient" ? patientFormPanel : taskFormPanel;
  const targetInput =
    pendingScrollTarget === "patient" ? patientForm.elements.name : taskTitleInput;

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

function renderSyncStatus() {
  if (!syncStatus) {
    return;
  }

  const status = state.syncStatus || "local";
  const labels = {
    local: "Lokal lagring",
    syncing: "Synkar...",
    synced: "Synkad",
    error: "Syncfel",
  };

  syncStatus.textContent = labels[status] || labels.local;
  syncStatus.className = `sync-status sync-status-${status}`;
}

function renderNavCounts() {
  const openCount = state.tasks.filter((task) => !task.done).length;
  const completedCount = state.tasks.filter((task) => task.done).length;
  tasksNavCount.textContent = `(${openCount})`;
  completedNavCount.textContent = `(${completedCount})`;
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
  patientFormTitle.textContent = state.editingPatientId ? "Redigera patient" : "Ny patient";
  savePatientButton.textContent = state.editingPatientId ? "Uppdatera patient" : "Spara patient";
  cancelEditButton.hidden = !state.editingPatientId;

  if (state.draftHistory.length === 0) {
    historyListPreview.textContent = "Inga bakgrundssjukdomar tillagda an.";
    historyListPreview.className = "bullet-list empty-inline";
  } else {
    historyListPreview.className = "bullet-list";
    historyListPreview.innerHTML = state.draftHistory
      .map(
        (entry, index) => `
          <div class="bullet-row">
            <span>${entry}</span>
            <button class="chip-button" data-action="remove-draft-history" data-id="${index}" type="button">Ta bort</button>
          </div>
        `,
      )
      .join("");
  }

  if (state.draftLabs.length === 0) {
    labListPreview.textContent = "Inga labb tillagda an.";
    labListPreview.className = "bullet-list empty-inline";
  } else {
    labListPreview.className = "bullet-list";
    labListPreview.innerHTML = state.draftLabs
      .map(
        (lab, index) => `
          <div class="bullet-row">
            <span>${lab}</span>
            <button class="chip-button" data-action="remove-draft-lab" data-id="${index}" type="button">Ta bort</button>
          </div>
        `,
      )
      .join("");
  }

  if (state.draftExams.length === 0) {
    examListPreview.textContent = "Inga undersokningar tillagda an.";
    examListPreview.className = "bullet-list empty-inline";
    return;
  }

  examListPreview.className = "bullet-list";
  examListPreview.innerHTML = state.draftExams
    .map(
      (exam, index) => `
        <div class="bullet-row">
          <span>${exam}</span>
          <button class="chip-button" data-action="remove-draft-exam" data-id="${index}" type="button">Ta bort</button>
        </div>
      `,
    )
    .join("");
}

function renderTaskForm() {
  taskFormPanel.hidden = !state.isTaskFormOpen;
  toggleTaskFormButton.textContent = state.isTaskFormOpen
    ? "Stang formularet"
    : "Lagg till uppgift";
  taskFormTitle.textContent = state.editingTaskId ? "Redigera uppgift" : "Ny uppgift";
  saveTaskButton.textContent = state.editingTaskId ? "Uppdatera uppgift" : "Skapa uppgift";
  cancelTaskEditButton.hidden = !state.editingTaskId;
}

function renderTaskFilters() {
  taskFilterPatient.innerHTML = '<option value="">Alla patienter</option>';
  state.patients.forEach((patient) => {
    const option = document.createElement("option");
    option.value = patient.name;
    option.textContent = patient.name;
    if (patient.name === state.taskFilters.patient) {
      option.selected = true;
    }
    taskFilterPatient.appendChild(option);
  });
}

function addDraftHistory() {
  const value = historyInput.value.trim();

  if (!value) {
    return;
  }

  state.draftHistory = [...state.draftHistory, value];
  historyInput.value = "";
  renderPatientForm();
  void persistState();
}

function addDraftLab() {
  const value = labInput.value.trim();

  if (!value) {
    return;
  }

  state.draftLabs = [...state.draftLabs, value];
  labInput.value = "";
  renderPatientForm();
  void persistState();
}

function addDraftExam() {
  const value = examInput.value.trim();

  if (!value) {
    return;
  }

  state.draftExams = [...state.draftExams, value];
  examInput.value = "";
  renderPatientForm();
  void persistState();
}

function resetPatientFormState() {
  state.isPatientFormOpen = false;
  state.editingPatientId = null;
  state.draftHistory = [];
  state.draftLabs = [];
  state.draftExams = [];
  patientForm.reset();
}

function resetTaskFormState() {
  state.isTaskFormOpen = false;
  state.editingTaskId = null;
  taskForm.reset();
}

function startEditingPatient(patientId) {
  const patient = state.patients.find((entry) => entry.id === patientId);

  if (!patient) {
    return;
  }

  state.editingPatientId = patient.id;
  state.selectedPatientId = patient.id;
  state.isPatientFormOpen = true;
  state.draftHistory = [...patient.history];
  state.draftLabs = [...patient.labs];
  state.draftExams = [...patient.exams];
  pendingScrollTarget = "patient";

  patientForm.elements.name.value = patient.name;
  patientForm.elements.avatar.value = patient.avatar || "🧑";
  patientForm.elements.arrivalDate.value = patient.arrivalDate || "";
  patientForm.elements.reason.value = patient.reason;
  patientForm.elements.status.value = patient.status;
  patientForm.elements.news.value = patient.news;
}

function startEditingTask(taskId) {
  const task = state.tasks.find((entry) => entry.id === taskId);

  if (!task) {
    return;
  }

  state.currentView = "tasks";
  state.isTaskFormOpen = true;
  state.editingTaskId = task.id;
  pendingScrollTarget = "task";
  taskTitleInput.value = task.title;
  taskPatientInput.value = task.patient;
}

function openTaskFormForPatient(patientName) {
  state.currentView = "tasks";
  state.isTaskFormOpen = true;
  state.editingTaskId = null;
  pendingScrollTarget = "task";
  taskForm.reset();
  taskPatientInput.value = patientName;
}

function renderPatientOptions() {
  patientOptions.innerHTML = "";

  state.patients.forEach((patient) => {
    const option = document.createElement("option");
    option.value = patient.name;
    patientOptions.appendChild(option);
  });
}

function renderPatients() {
  patientList.innerHTML = "";

  if (state.patients.length === 0) {
    patientList.innerHTML =
      '<article class="template-output empty-state">Inga patienter tillagda an. Tryck pa "Ny patient" for att skapa din forsta.</article>';
    return;
  }

  state.patients.forEach((patient) => {
    const patientOpenTasks = state.tasks.filter(
      (task) => task.patient === patient.name && !task.done,
    );
    const patientTaskCount = patientOpenTasks.length;
    const patientTasks = patientOpenTasks;
    const card = document.createElement("article");
    const isOpen = patient.id === state.selectedPatientId;
    const historyMarkup =
      patient.history.length > 0
        ? `<div class="tag-list tag-list-history">${patient.history
            .map((entry) => `<span class="data-tag data-tag-history">${entry}</span>`)
            .join("")}</div>`
        : '<p class="item-copy">Ej ifyllt</p>';
    const labsMarkup =
      patient.labs.length > 0
        ? `<div class="tag-list tag-list-labs">${patient.labs
            .map((lab) => `<span class="data-tag data-tag-lab">${lab}</span>`)
            .join("")}</div>`
        : '<p class="item-copy">Ej ifyllt</p>';
    const examsMarkup =
      patient.exams.length > 0
        ? `<ul class="bullet-points">${patient.exams
            .map((exam) => `<li>${exam}</li>`)
            .join("")}</ul>`
        : '<p class="item-copy">Ej ifyllt</p>';
    const tasksMarkup =
      patientTasks.length > 0
        ? `<div class="task-chip-list">${patientTasks
            .map(
              (task) =>
                `<article class="mini-task-card">${task.title}${task.done ? " (klar)" : ""}</article>`,
            )
            .join("")}</div>`
        : '<p class="item-copy">Inga uppgifter kopplade.</p>';
    const taskSummary =
      patientTasks.length === 0
        ? "Inga uppgifter"
        : patientTasks.length === 1
          ? patientTasks[0].title
          : `${patientTasks.length} uppgifter`;
    card.className = `item-card patient-card ${isOpen ? "active" : ""}`;
    card.dataset.patientId = patient.id;
    card.innerHTML = `
      <div class="item-meta">
        <span class="pill ${patientTaskCount > 0 ? "pill-alert" : ""}">${patientTaskCount} oppna uppgifter</span>
      </div>
      <div class="patient-heading">
        <span class="patient-avatar" aria-hidden="true">${patient.avatar || "🧑"}</span>
        <h3 class="item-title">${patient.name}</h3>
      </div>
      <div class="detail-section summary-section compact-summary">
        <p class="item-copy"><strong>S:</strong> ${patient.reason || "Ej ifyllt"}</p>
      </div>
      <div class="detail-grid ${isOpen ? "expanded" : "collapsed"}">
        <div class="detail-section detail-section-inline detail-section-no-border">
          <p class="item-copy"><strong>S:</strong> ${patient.reason || "Ej ifyllt"}</p>
          <p class="item-copy item-copy-secondary">
            <strong>Ankomstdatum:</strong> ${formatDate(patient.arrivalDate)}
          </p>
        </div>
        <div class="detail-section">
          <p class="item-copy"><strong>B:</strong></p>
          ${historyMarkup}
        </div>
        <div class="detail-section">
          <p class="item-copy"><strong>Labb:</strong></p>
          ${labsMarkup}
        </div>
        <div class="detail-section">
          <p class="item-copy"><strong>Undersokningar:</strong></p>
          ${examsMarkup}
        </div>
        <div class="detail-section detail-section-no-border">
          <p class="item-copy"><strong>NEWS:</strong> ${patient.news || "Ej ifyllt"}</p>
        </div>
        <div class="detail-section detail-section-a">
          <p class="item-copy item-copy-a"><strong>A:</strong> ${patient.status || "Ej ifyllt"}</p>
        </div>
        <div class="detail-section">
          <p class="item-copy"><strong>R:</strong></p>
          ${tasksMarkup}
        </div>
      </div>
      <div class="item-actions detail-actions ${isOpen ? "" : "hidden-actions"}">
        <button class="chip-button" data-action="new-task-for-patient" data-id="${patient.id}" type="button">Ny uppgift</button>
        <button class="chip-button" data-action="edit-patient" data-id="${patient.id}" type="button">Redigera</button>
        <button class="chip-button" data-action="copy-patient" data-id="${patient.id}" type="button">Kopiera sammanfattning</button>
        <button class="chip-button" data-action="delete-patient" data-id="${patient.id}" type="button">Ta bort</button>
      </div>
    `;
    patientList.appendChild(card);
  });
}

function renderTasks() {
  taskList.innerHTML = "";

  if (state.tasks.length === 0) {
    taskList.innerHTML =
      '<article class="template-output empty-state">Inga uppgifter an. Lagg till dagens att-gora for dina patienter.</article>';
    return;
  }

  const filteredTasks = state.tasks.filter(
    (task) => !task.done && (!state.taskFilters.patient || task.patient === state.taskFilters.patient),
  );

  if (filteredTasks.length === 0) {
    taskList.innerHTML =
      '<article class="template-output empty-state">Inga uppgifter matchar filtren.</article>';
    return;
  }

  const orderedTasks = [...filteredTasks].sort((left, right) => {
    if (left.done !== right.done) {
      return Number(left.done) - Number(right.done);
    }

    if (left.done && right.done) {
      return (right.completedAt || "").localeCompare(left.completedAt || "");
    }

    return 0;
  });

  orderedTasks.forEach((task) => {
    const linkedPatient = state.patients.find((patient) => patient.name === task.patient);
    const card = document.createElement("article");
    card.className = `item-card task-card ${task.done ? "task-card-done" : ""}`;
    card.innerHTML = `
      <div class="item-meta">
        ${task.patient ? `<span class="pill">${task.patient}</span>` : ""}
        ${task.done ? '<span class="pill">Klar</span>' : ""}
      </div>
      <div class="task-title-row">
        <h3 class="item-title task-title">${task.title}</h3>
        ${task.done ? '<span class="done-check" aria-label="Avklarad">✓</span>' : ""}
      </div>
      <div class="item-actions">
        <button class="chip-button" data-action="toggle-task" data-id="${task.id}" type="button">
          ${task.done ? "Ateroppna" : "Markera klar"}
        </button>
        <button class="chip-button" data-action="edit-task" data-id="${task.id}" type="button">Redigera</button>
        ${
          linkedPatient
            ? `<button class="chip-button" data-action="jump-patient" data-id="${linkedPatient.id}" type="button">Ga till patient</button>`
            : ""
        }
        <button class="chip-button" data-action="delete-task" data-id="${task.id}" type="button">Ta bort</button>
      </div>
    `;
    taskList.appendChild(card);
  });
}

function renderCompletedTasks() {
  completedTaskList.innerHTML = "";
  const today = getTodayKey();
  const todaysCompleted = state.tasks
    .filter((task) => task.done && task.completedAt?.startsWith(today))
    .sort((left, right) => (right.completedAt || "").localeCompare(left.completedAt || ""));

  if (todaysCompleted.length === 0) {
    completedTaskList.innerHTML =
      '<article class="template-output empty-state">Inga uppgifter ar klarmarkerade idag.</article>';
    return;
  }

  todaysCompleted.forEach((task) => {
    const card = document.createElement("article");
    card.className = "item-card task-card task-card-done";
    card.innerHTML = `
      <div class="item-meta">
        ${task.patient ? `<span class="pill">${task.patient}</span>` : ""}
        <span class="pill">Klar</span>
      </div>
      <div class="task-title-row">
        <h3 class="item-title task-title">${task.title}</h3>
        <span class="done-check" aria-label="Avklarad">✓</span>
      </div>
      <p class="item-copy">Klarmarkerad: ${formatCompletedAt(task.completedAt)}</p>
    `;
    completedTaskList.appendChild(card);
  });
}

function buildPatientSummary(patient, taskLines) {
  return [
    `${patient.avatar || "🧑"} ${patient.name}`,
    `Ankomstdatum: ${formatDate(patient.arrivalDate)}`,
    `S: ${patient.reason || "-"}`,
    `B: ${patient.history.length > 0 ? patient.history.join(", ") : "-"}`,
    `NEWS: ${patient.news || "-"}`,
    `Labb: ${patient.labs.length > 0 ? patient.labs.join(", ") : "-"}`,
    `Undersokningar: ${patient.exams.length > 0 ? patient.exams.join(", ") : "-"}`,
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
    news: now,
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

    if (patientCard instanceof HTMLElement && !target.closest("[data-action]")) {
      const patientId = patientCard.dataset.patientId;
      state.selectedPatientId =
        state.selectedPatientId === patientId ? null : patientId;
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
    startEditingPatient(id);
  }

  if (action === "new-task-for-patient") {
    const patient = state.patients.find((entry) => entry.id === id);
    if (patient) {
      openTaskFormForPatient(patient.name);
      saveAndRender();
      taskTitleInput.focus();
      return;
    }
  }

  if (action === "jump-patient") {
    state.selectedPatientId = id;
    state.currentView = "patients";
  }

  if (action === "edit-task") {
    startEditingTask(id);
  }

  if (action === "delete-task") {
    state.tasks = state.tasks.filter((task) => task.id !== id);
  }

  if (action === "toggle-task") {
    state.tasks = state.tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
            completedAt: !task.done ? new Date().toISOString() : null,
          }
        : task,
    );
  }

  if (action === "remove-draft-lab") {
    state.draftLabs = state.draftLabs.filter((_, index) => String(index) !== id);
  }

  if (action === "remove-draft-exam") {
    state.draftExams = state.draftExams.filter((_, index) => String(index) !== id);
  }

  if (action === "remove-draft-history") {
    state.draftHistory = state.draftHistory.filter((_, index) => String(index) !== id);
  }

  if (action === "copy-patient") {
    const patient = state.patients.find((entry) => entry.id === id);

    if (patient) {
      const patientTasks = state.tasks.filter((task) => task.patient === patient.name);
      const taskLines =
        patientTasks.length > 0
          ? patientTasks
              .map((task) => `- [${task.done ? "x" : " "}] ${task.title} (${task.category})`)
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

window.addEventListener("app-storage-status", (event) => {
  const nextStatus = event.detail?.status;

  if (!nextStatus) {
    return;
  }

  state.syncStatus = nextStatus;
  renderSyncStatus();
});

async function initializeApp() {
  state.syncStatus = window.appStorage?.getStatus
    ? window.appStorage.getStatus()
    : "local";
  const loadedState = await (window.appStorage?.loadState
    ? window.appStorage.loadState()
    : Promise.resolve(null));
  state = normalizeState(loadedState);
  render();
}

void initializeApp();
