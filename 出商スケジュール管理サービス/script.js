let tasks = [];

// GitHub Pagesからschedule.jsonを取得
async function loadTasks() {
  const res = await fetch("schedule.json");
  tasks = await res.json();
  renderTasks();
}

// 予定を表示
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border p-2 rounded";

    li.innerHTML = `
      <div>
        <span class="font-semibold">${task.date}</span>
        <span class="text-sm text-gray-600"> ${task.time}</span> -
        ${task.task}
      </div>
      <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteTask(${task.id})">削除</button>
    `;

    list.appendChild(li);
  });
}

// 新しい予定を追加
document.getElementById("taskForm").addEventListener("submit", e => {
  e.preventDefault();
  const date = document.getElementById("dateInput").value;
  const time = document.getElementById("timeInput").value;
  const task = document.getElementById("taskInput").value;

  const newTask = {
    id: Date.now(),
    date,
    time,
    task
  };

  tasks.push(newTask);
  renderTasks();

  document.getElementById("taskForm").reset();
  switchTab("view");
});

// 削除
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

// タブ切り替え
function switchTab(tab) {
  const viewSection = document.getElementById("viewSection");
  const addSection = document.getElementById("addSection");
  const viewTab = document.getElementById("viewTab");
  const addTab = document.getElementById("addTab");

  if (tab === "view") {
    viewSection.classList.remove("hidden");
    addSection.classList.add("hidden");
    viewTab.classList.add("bg-blue-500", "text-white");
    addTab.classList.remove("bg-blue-500", "text-white");
    addTab.classList.add("bg-gray-300");
  } else {
    viewSection.classList.add("hidden");
    addSection.classList.remove("hidden");
    addTab.classList.add("bg-blue-500", "text-white");
    viewTab.classList.remove("bg-blue-500", "text-white");
    viewTab.classList.add("bg-gray-300");
  }
}

document.getElementById("viewTab").addEventListener("click", () => switchTab("view"));
document.getElementById("addTab").addEventListener("click", () => switchTab("add"));

// 初期表示
loadTasks();
switchTab("view");
let tasks = [];

// GitHub Pagesからschedule.jsonを取得
async function loadTasks() {
  const res = await fetch("schedule.json");
  tasks = await res.json();
  renderTasks();
}

// 予定を表示
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border p-2 rounded";

    li.innerHTML = `
      <div>
        <span class="font-semibold">${task.date}</span>
        <span class="text-sm text-gray-600"> ${task.time}</span> -
        ${task.task}
      </div>
      <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteTask(${task.id})">削除</button>
    `;

    list.appendChild(li);
  });
}

// 新しい予定を追加
document.getElementById("taskForm").addEventListener("submit", e => {
  e.preventDefault();
  const date = document.getElementById("dateInput").value;
  const time = document.getElementById("timeInput").value;
  const task = document.getElementById("taskInput").value;

  const newTask = {
    id: Date.now(),
    date,
    time,
    task
  };

  tasks.push(newTask);
  renderTasks();

  document.getElementById("taskForm").reset();
  switchTab("view");
});

// 削除
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

// タブ切り替え
function switchTab(tab) {
  const viewSection = document.getElementById("viewSection");
  const addSection = document.getElementById("addSection");
  const viewTab = document.getElementById("viewTab");
  const addTab = document.getElementById("addTab");

  if (tab === "view") {
    viewSection.classList.remove("hidden");
    addSection.classList.add("hidden");
    viewTab.classList.add("bg-blue-500", "text-white");
    addTab.classList.remove("bg-blue-500", "text-white");
    addTab.classList.add("bg-gray-300");
  } else {
    viewSection.classList.add("hidden");
    addSection.classList.remove("hidden");
    addTab.classList.add("bg-blue-500", "text-white");
    viewTab.classList.remove("bg-blue-500", "text-white");
    viewTab.classList.add("bg-gray-300");
  }
}

document.getElementById("viewTab").addEventListener("click", () => switchTab("view"));
document.getElementById("addTab").addEventListener("click", () => switchTab("add"));

// 初期表示
loadTasks();
switchTab("view");
