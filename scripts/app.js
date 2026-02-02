import { renderSummary } from "./ui/summary.js";
import { renderTransactions } from "./ui/table.js";
import { hiddenModal } from "./ui/modal.js";

import "./utils/darkMode.js";

function initApp() {
  hiddenModal();
  renderSummary();
  renderTransactions();
}

initApp();
