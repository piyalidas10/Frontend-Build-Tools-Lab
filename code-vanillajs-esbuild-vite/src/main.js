import './styles/main.css';

import { router } from './router/router';

async function initializeApp() {
  try {
    await router();

    if (import.meta.hot) {
      import.meta.hot.send('app:initialized', {
        url: location.pathname,
        timestamp: Date.now()
      });
    }
    console.log('Vite default env => ", import.meta.env);
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

  if (import.meta.hot) {
    import.meta.hot.send('route:changed', {
      path: href,
      timestamp: Date.now()
    });
  }
});

window.addEventListener('popstate', async () => {
  await router();

  if (import.meta.hot) {
    import.meta.hot.send('route:changed', {
      path: location.pathname,
      timestamp: Date.now()
    });
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'settings-form') {
    event.preventDefault();

    const settings = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      theme: document.getElementById('theme').value
    };

    localStorage.setItem(
      'app-settings',
      JSON.stringify(settings)
    );

    if (import.meta.hot) {
      import.meta.hot.send('settings:saved', {
        settings,
        timestamp: Date.now()
      });
    }

    alert('Settings saved');
  }
});

window.addEventListener('DOMContentLoaded', initializeApp);

/* Vite HMR */
if (import.meta.hot) {
  import.meta.hot.accept();

  import.meta.hot.on('server:event', (data) => {
    console.log('Message from Vite server:', data);
  });

  import.meta.hot.dispose(() => {
    console.log('Module disposed');
  });
}
