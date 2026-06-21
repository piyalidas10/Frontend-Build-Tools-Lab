import './styles/main.css';

import { router } from './router/router';

async function initializeApp() {
  try {
    await router();
  } catch (error) {
    console.error('Application initialization failed:', error);

    document.getElementById('app').innerHTML = `
      <div class="error-container">
        <h2>Something went wrong</h2>
        <p>${error.message}</p>
      </div>
    `;
  }
}

document.addEventListener('click', async (event) => {
  const link = event.target.closest('[data-link]');

  if (!link) return;

  event.preventDefault();

  const href = link.getAttribute('href');

  history.pushState({}, '', href);

  await router();
});

window.addEventListener('popstate', async () => {
  await router();
});

document.addEventListener('submit', (event) => {

  if (
    event.target.id === 'settings-form'
  ) {

    event.preventDefault();

    const settings = {
      username:
        document.getElementById('username')
          .value,

      email:
        document.getElementById('email')
          .value,

      theme:
        document.getElementById('theme')
          .value
    };

    localStorage.setItem(
      'app-settings',
      JSON.stringify(settings)
    );

    alert('Settings saved');
  }
});

window.addEventListener('DOMContentLoaded', initializeApp);