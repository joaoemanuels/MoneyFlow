import { state } from "../data/storage.js";
import { renderTransactions } from "../ui/table.js";
import { normalizeDate } from "../utils/formatDate.js";

const form = document.querySelector(".dashboard-search");
const searchInput = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    renderTransactions();
    return;
  }

  const filteredTransactions = state.transactions.filter((transaction) => {
    const dateMatches = normalizeDate(transaction.date).some((dataFormatada) =>
      dataFormatada.includes(query),
    );

    return (
      transaction.title.toLowerCase().includes(query) ||
      transaction.category.toLowerCase().includes(query) ||
      transaction.amount.toString().includes(query) ||
      dateMatches
    );
  });

  renderTransactions(filteredTransactions);
});
