export function Sidebar() {
  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <h2>Task Manager</h2>
      </div>

      <nav class="sidebar-nav">
        <ul>
          <li>
            <a href="/" data-link>
              🏠 Dashboard
            </a>
          </li>

          <li>
            <a href="/tasks" data-link>
              📋 Tasks
            </a>
          </li>

          <li>
            <a href="/reports" data-link>
              📊 Reports
            </a>
          </li>

          <li>
            <a href="/settings" data-link>
              ⚙️ Settings
            </a>
          </li>

          <li>
            <a href="/about" data-link>
              ℹ️ About
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `;
}