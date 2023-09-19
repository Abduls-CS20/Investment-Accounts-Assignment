// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let maxDataVal = 5000; // max data value

// *****************************************************
// INITIALIZE ACCOUNTS ARRAY
// *****************************************************
let accounts = Array.from({ length: 50 }, () => Math.floor(Math.random() * maxDataVal));


// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  // Prompt the user for the index of an account and the amount to deposit into that account.
  // Modify the accounts array to reflect the deposit.
  // Adjust the maxDataVal variable if necessary.
  // Use the outputEl to provide a confirmation message.

  let index = +prompt("Enter account index");
  let amount = +prompt("Enter Deposit amount");

  accounts[index] += amount;

  if (accounts[index] > maxDataVal) {
    maxDataVal = accounts[index];
  }

  outputEl.innerHTML = "Deposit Completed";
}

function withdrawal() {
  // Prompt the user for the index of an account and the amount to withdraw from that account.
  // Modify the accounts array to reflect the withdrawal.
  // Check to assure that the account has enough funds.
  // Use the outputEl to provide a confirmation message.

  let index =+ prompt("Enter account index");
  let amount =+ prompt("Enter Withdrawal amount");

  if (accounts[index] >= amount) {
    accounts[index] -= amount;
    outputEl.innerHTML = "Withdrawal Completed";
  } else {
    outputEl.innerHTML = "Insufficient Funds";
  }


}

function countUnder2000() {
  // Count the number of accounts that are less than 2000
  // Use the outputEl to display the results of the count.

  let count = 0;

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      count++;
    }
  }

  outputEl.innerHTML = "Count Under $2000: " + count;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000.
  // Modify the investment account array to apply this donation.
  // Use the outputEl to display the total amount of money that was donated.

  let total = 0;

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      total += 500;
    }
  }

  outputEl.innerHTML = "Generous Donor Donated: $" + total;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Use the outputEl to display the total amount that was stolen.

  let total = 0;

  for (let i = 0; i < accounts.length; i++) {
    accounts[i] -= accounts[i] * 0.05;
    total += accounts[i] * 0.05;
  }

  outputEl.innerHTML = "Hacker Attack";
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Display Data
drawArray(accounts, maxDataVal);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }

  // Redraw array to show any changes
  drawArray(accounts, maxDataVal);
}

// DRAW ARRAY FUNCTION
// Function to draw current state of grades array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
