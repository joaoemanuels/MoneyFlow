//import { loadTransactions } from "./services/transactionsService.js";
import { getTotalIncome } from "./services/income.js";

// UI
//import { renderTable } from "./ui/table.js";
//import { renderSummary } from "./ui/summary.js";
//import { initForm } from "./ui/form.js";
//import { initModal } from "./ui/modal.js";

function initApp() {
  getTotalIncome();
  //loadTransactions();
  //renderSummary();
  //renderTable();
  //initForm();
  //initModal();
}

initApp();
