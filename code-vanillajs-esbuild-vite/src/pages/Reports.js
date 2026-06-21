export default async function Reports() {

  const reports = [
    {
      title: 'Completed Tasks',
      value: 42
    },
    {
      title: 'Pending Tasks',
      value: 18
    },
    {
      title: 'Team Productivity',
      value: '87%'
    },
    {
      title: 'Sprint Velocity',
      value: '32 SP'
    }
  ];

  return `
    <section>
      <h1>Reports</h1>

      <div class="reports-grid">

        ${reports
          .map(
            report => `
              <div class="report-card">
                <h3>${report.title}</h3>
                <h2>${report.value}</h2>
              </div>
            `
          )
          .join('')}

      </div>
    </section>
  `;
}