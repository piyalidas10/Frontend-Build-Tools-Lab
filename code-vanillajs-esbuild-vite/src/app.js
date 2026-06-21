import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App(content) {
  return `
    <div class="layout">

      ${Sidebar()}

      <div class="main-container">

        ${Header()}

        <main class="content">
          ${content}
        </main>

      </div>

    </div>
  `;
}