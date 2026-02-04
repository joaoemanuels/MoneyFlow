import { renderCards } from "./cards.js";
import { renderTransactions } from "./table.js";

import "./calendar.js";
import "../services/chartData.js";
import "./greeting.js";
import "./form.js";
import "./search.js";

export function renderSummary() {
  renderCards();
  renderTransactions();
}
