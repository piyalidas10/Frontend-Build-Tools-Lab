export async function fetchTasks() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }

  return await response.json();
}