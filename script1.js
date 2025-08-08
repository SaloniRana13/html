const addNoteBtn = document.getElementById("add-note-btn");
const notesContainer = document.getElementById("notes-container");

// Load notes from localStorage
window.onload = () => {
  const notes = JSON.parse(localStorage.getItem("stickyNotes")) || [];
  notes.forEach(text => createNote(text));
};

// Save all notes to localStorage
function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note textarea").forEach(note => {
    notes.push(note.value);
  });
  localStorage.setItem("stickyNotes", JSON.stringify(notes));
}

// Create a new note
function createNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.value = text;

  textarea.addEventListener("input", saveNotes);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  note.appendChild(deleteBtn);
  note.appendChild(textarea);
  notesContainer.appendChild(note);
}

// Add new note on button click
addNoteBtn.addEventListener("click", () => {
  createNote();
  saveNotes();
});
