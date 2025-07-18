function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) {
        resolve("✅ Data loaded successfully!");
      } else {
        reject("❌ Failed to load data.");
      }
    }, 1000);
  });
}

function runPromise() {
  const resultElement = document.getElementById("result");

  resultElement.textContent = "⏳ Loading...";

  getData()
    .then((data) => {
      resultElement.textContent = data;
    })
    .catch((error) => {
      resultElement.textContent = error;
    });
}
