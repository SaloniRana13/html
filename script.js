function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage:
const searchInput = document.getElementById('search');

function handleSearch(e) {
  console.log('Searching for:', e.target.value);
}

const debouncedSearch = debounce(handleSearch, 500);

searchInput.addEventListener('input', debouncedSearch);
