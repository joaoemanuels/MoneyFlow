import { renderCards } from "./cards.js";
import { renderTransactions } from "./table.js";
import { initCardFormatter } from "../utils/formatCard.js";

import "./calendar.js";
import "../services/chartData.js";
import "./greeting.js";
import "./form.js";
import "../services/search.js";

export function renderSummary() {
  renderCards();
  renderTransactions();
  initCardFormatter();
}
