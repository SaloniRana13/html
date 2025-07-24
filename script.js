// Using a feature that might not be available in older browsers
const fruits = ['apple', 'banana', 'mango'];
const hasBanana = fruits.includes('banana');

document.getElementById('output').textContent = 
  hasBanana ? 'Banana is included!' : 'Banana is not included.';
