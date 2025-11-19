const user = {
  name: "Chinenye",
  balance: 1000,
};

const instructions = ["withdraw", "deposit", "transfer"];

const instructionsContainer = document.querySelector(".instructions");
const transactionHistory = document.querySelector(".transaction-history");
/**
 * document.createElement("button")
 */

document.querySelector(".username").textContent = user.name;
document.querySelector(".balance").textContent = `N${user.balance}`;

for (let instruction of instructions) {
  let button = document.createElement("button");

  button.innerHTML = instruction;
  button.className = instruction;

  console.log(button);

  /**
   * <button class="withdraw">
   */

  instructionsContainer.appendChild(button);
}

const withdrawButton = document.querySelector(".withdraw");
const depositButton = document.querySelector(".deposit");
const transferButton = document.querySelector(".transfer");

withdrawButton.addEventListener("click", () => {
  const amountInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  let amountEntered = 0;
  let removeButtonDisplayed = false

  amountInput.type = "number";
  amountInput.className = "amount-input";
  amountInput.placeholder = "Enter amount";

  submitBtn.innerHTML = "Withdraw";
  submitBtn.className = "withdraw-btn";

  document.querySelector(".request").appendChild(amountInput);
  document.querySelector(".request").appendChild(submitBtn);

  amountInput.addEventListener("change", (e) => {
    amountEntered = e.target.value;
  });

  submitBtn.addEventListener("click", () => {
    if (removeButtonDisplayed === false) {
      removeButtonDisplayed = true;
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "Remove";
      removeBtn.className = "remove-btn";

      document.querySelector(".request").appendChild(removeBtn);
      removeBtn.addEventListener("click", () => {
        removeBtn.remove();
        submitBtn.remove();
        amountInput.remove();
        amountEntered = 0;
      });
    }

    if (amountEntered > user.balance) {
      alert("Insufficient Balance");
      return;
    }
    user.balance -= amountEntered;

    const historyItem = document.createElement("li");

    historyItem.innerHTML = `${
      user.name
    } withdrawed ${amountEntered} on ${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`;

    transactionHistory.appendChild(historyItem);

    document.querySelector(".balance").textContent = `N${user.balance}`;
  });
});

depositButton.addEventListener("click", () => {
  const amountInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  let amountEntered = 0;
  let removeButtonDisplayed = false;

  amountInput.type = "number";
  amountInput.className = "amount-input";
  amountInput.placeholder = "Enter amount";

  submitBtn.innerHTML = "Deposit";
  submitBtn.className = "deposit-btn";

  document.querySelector(".request").appendChild(amountInput);
  document.querySelector(".request").appendChild(submitBtn);

  amountInput.addEventListener("change", (e) => {
    amountEntered = e.target.value;
  });

  submitBtn.addEventListener("click", () => {
    if (removeButtonDisplayed === false) {
      removeButtonDisplayed = true;
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "Remove";
      removeBtn.className = "remove-btn";

      document.querySelector(".request").appendChild(removeBtn);
      removeBtn.addEventListener("click", () => {
        removeBtn.remove();
        submitBtn.remove();
        amountInput.remove();
        amountEntered = 0;
      });
    }

    user.balance += Number(amountEntered);

    const historyItem = document.createElement("li");

    historyItem.innerHTML = `${
      user.name
    } deposited ${amountEntered} on ${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`;

    transactionHistory.appendChild(historyItem);
    document.querySelector(".balance").textContent = `N${user.balance}`;
  });
});

transferButton.addEventListener("click", () => {
  console.log("Transfer clicked");
});
