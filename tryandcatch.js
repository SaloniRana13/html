function triggerError() {
  try {
    // Simulate an error
    let result = someUndefinedFunction(); // This will throw ReferenceError
  } catch (error) {
    // Handle the error
    console.error("Caught an error:", error);
    
    // Display error message on the page
    document.getElementById("message").textContent = `Error: ${error.message}`;
  } finally {
    console.log("This will run no matter what.");
  }
}
