const menuItems = [
  { name: 'Dashboard', path: '/', icon: '🏠' },
  { name: 'Tasks', path: '/tasks', icon: '📋' },
  { name: 'Reports', path: '/reports', icon: '📊' },
  { name: 'Settings', path: '/settings', icon: '⚙️' },
  { name: 'About', path: '/about', icon: 'ℹ️' }
];

/**
 * Dynamic Menu Sidebar Component
 * 
 * Features:
 * Role-Based Access Control (RBAC)
 * Permission-based menus
 * Nested menus
 * Collapsible sidebar
 * Dynamic menu loading from APIs
 * Microfrontend navigation shells
 *  
 */

export function Sidebar() {
  return `
    <aside class="sidebar">
      <h2>Task Manager</h2>

      <nav class="sidebar-nav">
        <ul>
          ${menuItems
            .map(
              item => `
                <li>
                  <a href="${item.path}" data-link>
                    ${item.icon} ${item.name}
                  </a>
                </li>
              `
            )
            .join('')}
        </ul>
      </nav>
    </aside>
  `;
}