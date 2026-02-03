import { renderCards } from "./cards.js";
import { renderTransactions } from "./table.js";

import "../services/chartData.js";
import "./greeting.js";
import "./form.js";
import {} from "./search.js";

export function renderSummary() {
  renderCards();
  renderTransactions();
}
