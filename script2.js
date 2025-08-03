// const list = document.getElementById("myList");
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 1000; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Item ${i}`;
//   fragment.appendChild(li);
// }

// list.appendChild(fragment); // 1 reflow instead of 1000



function createCard(title, content) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;
  return card;
}

document.body.appendChild(createCard("JS Tips", "Use fragments for performance."));
