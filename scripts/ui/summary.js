import {
  getTotalIncome,
  getTotalExpense,
  getExpenseByCategory,
} from "../services/income.js";

import "../ui/cards.js";
import "../ui/modal.js";

export function renderSummary() {
  const totalIncome = getTotalIncome();
  const totalExpense = getTotalExpense();
  const expenseByCategory = getExpenseByCategory();
}
