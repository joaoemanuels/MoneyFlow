import { state } from "../data/storage.js";
import { getLatestMonth } from "../utils/date.js";

/* ======================
   TOTAIS GERAIS
====================== */

export function getTotalIncome() {
  return state.transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
}

export function getTotalExpense() {
  return state.transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
}

/* ======================
   DESPESA POR CATEGORIA
====================== */

export function getExpenseByCategory() {
  return state.transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});
}

/* ======================
   TOTAIS MENSAIS
====================== */

export function getMonthlyIncome() {
  const latestMonth = getLatestMonth(state.transactions);
  if (!latestMonth) return 0;

  return state.transactions
    .filter(
      (t) =>
        t.type === "income" &&
        t.date.startsWith(latestMonth)
    )
    .reduce((acc, t) => acc + t.amount, 0);
}

export function getMonthlyExpense() {
  const latestMonth = getLatestMonth(state.transactions);
  if (!latestMonth) return 0;

  return state.transactions
    .filter(
      (t) =>
        t.type === "expense" &&
        t.date.startsWith(latestMonth)
    )
    .reduce((acc, t) => acc + t.amount, 0);
}
