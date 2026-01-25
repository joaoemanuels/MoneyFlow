import { state } from "../../mock/transactions.js";

const list = document.querySelector(".transactions-list");
const emptyMessage = document.getElementById("empty-message");

export function renderTransactions() {
  const transactions = state.transactions;
  list.innerHTML = "";

  if (transactions.length === 0) {
    emptyMessage.classList.remove("hidden");
    return;
  }
  emptyMessage.classList.add("hidden");

  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.classList.add("transaction-item");

    li.classList.add(transaction.type);

    li.innerHTML = `
      <span class="transaction-title">img</span>
      <span class="transaction-title">${transaction.title}</span>
      <span class="transaction-category">${transaction.category}</span>
      <span class="transaction-date">${transaction.date}</span>
      <span class="transaction-amount">
      ${transaction.amount}
      </span>
`;
    list.appendChild(li);
  });
}
