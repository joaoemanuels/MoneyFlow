import { renderSummary } from "./ui/summary.js";
import { renderTransactions } from "./ui/table.js";
import { hiddenModal } from "./ui/modal.js";
import { initChart } from "./services/chartData.js";
import "./utils/darkMode.js";

function initApp() {
  hiddenModal();
  renderSummary();
  renderTransactions();
  initChart(); 
}

document.addEventListener("DOMContentLoaded", initApp);
