// Load tasks from localStorage on page load
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => createTaskElement(task.text, task.done));
};

// Create task element and add it to the DOM
function createTaskElement(taskText, done = false) {
  const li = document.createElement("li");
  if (done) li.classList.add("done");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    li.classList.toggle("done");
    saveTasks();
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
}

// Add task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  createTaskElement(taskText);
  saveTasks();
  input.value = "";
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    const text = li.querySelector("span").textContent;
    const done = li.classList.contains("done");
    tasks.push({ text, done });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
