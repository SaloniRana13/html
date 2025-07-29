
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById('output').textContent = 'Error loading data.';
    console.error('Fetch error:', error);
  }
}

fetchData();
