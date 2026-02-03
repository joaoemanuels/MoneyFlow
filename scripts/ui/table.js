import { state } from "../data/storage.js";
import { formatDate } from "../utils/formatDate.js";

const list = document.querySelector(".transactions-list");
const emptyMessage = document.getElementById("empty-message");

const categoryIcons = {
  Trabalho: "../../assets/icons/work.svg",
  Moradia: "../../assets/icons/rent.svg",
  Serviços: "../../assets/icons/expenses.svg",
  Lazer: "../../assets/icons/leisure.svg",
  Vendas: "../../assets/icons/sales.svg",
  Investimentos: "../../assets/icons/investment.svg",
  Alimentação: "../../assets/icons/food.svg",
  Freelance: "../../assets/icons/services.svg",
  Assinaturas: "../../assets/icons/stream.svg",
  Saúde: "../../assets/icons/health.svg",
};

export function renderTransactions(transactions = state.transactions) {
  list.innerHTML = "";

  if (transactions.length === 0) {
    emptyMessage.classList.remove("hidden");
    return;
  }

  emptyMessage.classList.add("hidden");

  const sortedTransactions = [...transactions].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  sortedTransactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.classList.add("transaction-item", transaction.type);

    const icon =
      categoryIcons[transaction.category] || "../../assets/icons/default.svg";

    li.innerHTML = `
      <img class="transaction-image" src="${icon}" alt="${transaction.category}" />
      <span class="transaction-title">${transaction.title}</span>
      <span class="transaction-category">${transaction.category}</span>
      <span class="transaction-date">${formatDate(transaction.date)}</span>
      <span class="transaction-amount">
        R$ ${transaction.amount.toFixed(2)}
      </span>
    `;

    list.appendChild(li);
  });
}
