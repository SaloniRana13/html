
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('filter-btn');
  const output = document.getElementById('output');

  button.addEventListener('click', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const even = filterEvenNumbers(numbers);
    output.textContent = `Even Numbers: ${even.join(', ')}`;
  });
});
