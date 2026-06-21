export default async function Settings() {
  return `
    <section>
      <h1>Settings</h1>

      <form id="settings-form">

        <div class="form-group">
          <label>
            User Name
          </label>

          <input
            type="text"
            id="username"
            value="John Doe"
          />
        </div>

        <div class="form-group">
          <label>
            Email
          </label>

          <input
            type="email"
            id="email"
            value="john@example.com"
          />
        </div>

        <div class="form-group">
          <label>
            Theme
          </label>

          <select id="theme">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <button
          type="submit"
          class="btn-primary"
        >
          Save Settings
        </button>

      </form>
    </section>
  `;
}