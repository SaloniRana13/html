 const grandparent = document.getElementById("grandparent");
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  grandparent.addEventListener("click", function () {
    console.log("Grandparent clicked");
  });

  parent.addEventListener("click", function () {
    console.log("Parent clicked");
  });

  child.addEventListener("click", function () {
    console.log("Child clicked");
  });