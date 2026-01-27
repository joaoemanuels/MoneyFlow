import { state } from "../data/storage.js";

const list = document.querySelector(".transactions-list");
const emptyMessage = document.getElementById("empty-message");

const categoryIcons = {
  Trabalho: "../../assets/icons/bell.png",
  Moradia: "../../assets/icons/wallet.png",
  Serviços: "../../assets/icons/home.png",
  Lazer: "../../assets/icons/expense.png",
  Vendas: "../../assets/icons/time-past.png",
  Investimentos: "../../assets/icons/credit-card.png",
  Alimentação: "../../assets/icons/trophy-star.png",
  Freelance: "../../assets/icons/search.png",
  Assinaturas: "../../assets/icons/settings.png",
  Saúde: "../../assets/icons/calendar.png",
};

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
    li.classList.add("transaction-item", transaction.type);

    const icon =
      categoryIcons[transaction.category] || "../../assets/icons/default.svg";

    li.innerHTML = `
    <img 
      class="transaction-image"
      src="${icon}"
      alt="${transaction.category}"
    />
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
