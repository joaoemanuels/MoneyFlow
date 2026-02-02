import { addTransaction } from "../services/transactionsService.js";
import { renderSummary } from "../ui/summary.js";

const form = document.querySelector(".transaction-form");
const modalPlus = document.getElementById("modal-plus");
const btnPlus = document.getElementById("btn-modal-plus");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("desc");
  const amount = Number(formData.get("value"));
  const type = formData.get("type");
  const category = formData.get("category");
  const date = formData.get("date");

  if (!title || !amount || !type || !category || !date) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  addTransaction({
    title,
    amount,
    type,
    category,
    date,
  });

  renderSummary();

  modalPlus.classList.add("hidden");
  btnPlus.classList.remove("active");
  form.reset();
});
