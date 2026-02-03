import { state } from "../data/storage.js";
import { getLatestMonth } from "../utils/date.js";

export function getTotalIncome() {
  return state.transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);
}

export function getTotalExpense() {
  return state.transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);
}

export function getExpenseByCategory() {
  return state.transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => {
      sum[transaction.category] =
        (sum[transaction.category] || 0) + transaction.amount;
      return sum;
    }, {});
}

export function getMonthlyIncome() {
  const latestMonth = getLatestMonth(state.transactions);
  if (!latestMonth) return 0;

  return state.transactions
    .filter(
      (transaction) =>
        transaction.type === "income" &&
        transaction.date.startsWith(latestMonth),
    )
    .reduce((sum, transaction) => sum + transaction.amount, 0);
}

export function getMonthlyExpense() {
  const latestMonth = getLatestMonth(state.transactions);
  if (!latestMonth) return 0;

  return state.transactions
    .filter(
      (transaction) =>
        transaction.type === "expense" &&
        transaction.date.startsWith(latestMonth),
    )
    .reduce((sum, transaction) => sum + transaction.amount, 0);
}
