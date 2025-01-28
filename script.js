// DOM Elements
const taskInput = document.getElementById('taskInput');
const dateTimeInput = document.getElementById('dateTimeInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Logic
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const dateTime = dateTimeInput.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>
      <strong>${taskText}</strong> <br />
      <small>${dateTime ? dateTime : 'No Deadline'}</small>
    </span>
    <div class="task-buttons">
      <button class="complete">✔</button>
      <button class="edit">✏</button>
      <button class="delete">❌</button>
    </div>
  `;

  taskList.appendChild(listItem);

  taskInput.value = '';
  dateTimeInput.value = '';

  // Mark Task as Complete
  listItem.querySelector('.complete').addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Edit Task
  listItem.querySelector('.edit').addEventListener('click', () => {
    const updatedText = prompt('Edit your task:', taskText);
    if (updatedText) {
      listItem.querySelector('strong').innerText = updatedText;
    }
  });

  // Delete Task
  listItem.querySelector('.delete').addEventListener('click', () => {
    taskList.removeChild(listItem);
  });
});
