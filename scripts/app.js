i// Services
import { loadTransactions } from "./services/transactionsService.js";

// UI
import { renderTable } from "./ui/table.js";
import { renderSummary } from "./ui/summary.js";
import { initForm } from "./ui/form.js";
import { initModal } from "./ui/modal.js";

function initApp() {
  loadTransactions();
  renderSummary();
  renderTable();
  initForm();
  initModal();
}

initApp();
