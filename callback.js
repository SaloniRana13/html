function simulateTask(callback) {
  const status = document.getElementById("status");
  status.textContent = "⏳ Processing...";

  setTimeout(() => {
    status.textContent = "✅ Task Complete!";
    callback();
  }, 1500);
}

function startProcess() {
  simulateTask(function () {
    console.log("Callback: Task completed!");
    alert("Callback executed!");
  });
}
