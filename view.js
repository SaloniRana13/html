

// Render the entire layout structure
export const renderLayout = () => {
  document.body.innerHTML = `
    ${renderHeader()}
    <div class="maindiv">
      ${renderTotalSection()}
      ${renderExpenseSection()}
    </div>
  `;
};


//Render the application header

const renderHeader = () => `
  <div class="header"><h1>Expense Tracker</h1></div>
`;

//Render the total amount section

const renderTotalSection = () => `
  <div class="right-container">
    <div>
      <h3>Set Total Amount</h3>
      <div class="form-section">
        <input type="number" id="total-input" placeholder="Enter total amount" />
        <button id="set-total">Set Total Amount</button>
      </div>
    </div>
    <div class="upper" id="total-amount">Total Amount: ₹0</div>
    <div class="lower" id="remaining-amount">Left Amount: ₹0</div>
    <div><canvas id="myChart" style="width:100%;max-width:600px; margin-top: 20px;"></canvas></div>
  </div>
`;

// Render the expense input section

const renderExpenseSection = () => `
  <div class="container">
    <h3>Add New Expense</h3>
    <div class="form-section">
      <input type="text" id="expense-input" placeholder="Enter expense description" />
      <input type="number" id="amount-input" placeholder="Amount" />
      <br>
      <button id="add-expense">Add Expense</button>
    </div>
    <div class="listExpence">
      <ul id="expense-list"></ul>
    </div>
  </div>
`;


//Update the total and remaining amount in the UI

export const updateTotals = ({ totalAmount, remainingAmount }) => {
  document.getElementById("total-amount").innerText = `Total Amount: ₹${totalAmount}`;
  document.getElementById("remaining-amount").innerText = `Left Amount: ₹${remainingAmount}`;
};


// Clear input fields after adding expense or setting total

export const clearInputs = () => {
  document.getElementById("expense-input").value = "";
  document.getElementById("amount-input").value = "";
};

 //Enable or disable the "Add Expense" button based on balance

export const disableAddButton = (disable) => {
  const button = document.getElementById("add-expense");
  button.disabled = disable;
  button.style.backgroundColor = disable ? "#ccc" : "#714c06";
};
