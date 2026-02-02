import { state } from "../data/storage.js";
import { generateId } from "../utils/generateId.js";

export function addTransaction(transaction) {
  const newTransaction = {
    id: generateId(),
    title: transaction.title,
    type: transaction.type,
    category: transaction.category,
    amount: Number(transaction.amount),
    date: transaction.date,
  };

  state.transactions.push(newTransaction);
  return newTransaction;
}
