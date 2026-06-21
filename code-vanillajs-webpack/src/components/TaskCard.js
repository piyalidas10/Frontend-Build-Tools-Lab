export function TaskCard(task) {
  return `
    <div class="task-card">
      <h3>${task.title}</h3>
      <p>Status:
        ${task.completed ? 'Done' : 'Pending'}
      </p>
    </div>
  `;
}