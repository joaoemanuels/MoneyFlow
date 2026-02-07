import { renderSummary } from "./ui/summary.js";
import { renderTransactions } from "./ui/table.js";
import { hiddenModal } from "./ui/modal.js";
import { initChart } from "./services/chartData.js";
import { initCardManager } from "./ui/accountCard.js";

import "./ui/darkMode.js";

function initApp() {
  hiddenModal();
  renderSummary();
  renderTransactions();
  initChart();
  initCardManager();
}

document.addEventListener("DOMContentLoaded", initApp);
