import { renderCards } from "../ui/cards.js";
import { renderTransactions } from "../ui/table.js";

import "../services/chartData.js";
import "../ui/greeting.js";
import "./form.js";

export function renderSummary() {
  renderCards();
  renderTransactions();
}
