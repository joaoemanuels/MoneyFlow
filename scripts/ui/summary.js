import {
  getTotalIncome,
  getTotalExpense,
  getExpenseByCategory,
} from "../services/income.js";

import "../ui/cards.js";
import "../services/chartData.js";
import "../ui/greeting.js";
import { renderTransactions } from "../ui/table.js";
import { hiddenModal } from "../ui/modal.js";

export function renderSummary() {
  const totalIncome = getTotalIncome();
  const totalExpense = getTotalExpense();
  const expenseByCategory = getExpenseByCategory();
  renderTransactions();
  hiddenModal();
}
