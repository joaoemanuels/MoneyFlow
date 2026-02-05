import { renderCards } from "./cards.js";
import { renderTransactions } from "./table.js";

import "./calendar.js";
import "../services/chartData.js";
import "./greeting.js";
import "./form.js";
import "./search.js";
import { initCardFormatter } from "../utils/formatCard.js";

export function renderSummary() {
  renderCards();
  renderTransactions();
  initCardFormatter();
}
