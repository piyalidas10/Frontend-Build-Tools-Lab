import { fetchTasks } from '../api/tasks.js';

export default async function Tasks() {
  try {
    const tasks = await fetchTasks();

    return `
      <section>
        <h1>Tasks</h1>

        <div class="tasks-grid">
          ${tasks
            .slice(0, 20)
            .map(
              task => `
                <div class="card">
                  <h3>${task.title}</h3>

                  <p>
                    Status:
                    <strong>
                      ${task.completed ? '✅ Completed' : '⏳ Pending'}
                    </strong>
                  </p>

                  <small>
                    Task ID: ${task.id}
                  </small>
                </div>
              `
            )
            .join('')}
        </div>
      </section>
    `;
  } catch (error) {
    console.error('Failed to load tasks:', error);

    return `
      <section>
        <h1>Tasks</h1>

        <div class="error-container">
          Failed to load tasks.
        </div>
      </section>
    `;
  }
}