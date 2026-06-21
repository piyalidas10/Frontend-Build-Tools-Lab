import { App } from '../app';

const routes = {
  '/': () => import('../pages/Home'),
  '/about': () => import('../pages/About'),
  '/tasks': () => import('../pages/Tasks'),
  '/reports': () => import('../pages/Reports'),
  '/settings': () => import('../pages/Settings')
};

/**
 * Handles client-side routing by loading the appropriate page
 * module based on the current URL path and rendering it within
 * the main application layout.
 */
export async function router() {
  const path = location.pathname;

  const routeLoader =
    routes[path] || routes['/'];

  const module = await routeLoader(); // Dynamically import the page module based on the current path

  const pageContent = await module.default(); // Call the default export of the loaded module to get the HTML content for the page

  const html = App(pageContent); // Wrap the page content with the main application layout

  document.getElementById('app').innerHTML = html;

  highlightActiveMenu(path);
}

/**
 * Highlights the active menu item in the sidebar based on the current URL path. 
 * It iterates through all sidebar links and toggles the 'active' class
 * 
 * @param {*} currentPath 
 */
function highlightActiveMenu(currentPath) {
  document
    .querySelectorAll('.sidebar a')
    .forEach(link => {
      const href = link.getAttribute('href');

      link.classList.toggle(
        'active',
        href === currentPath
      );
    });
}