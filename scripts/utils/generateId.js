import { state } from "../data/storage.js";

export function generateId() {
  if (state.transactions.length === 0) {
    return 1;
  }

  const ids = state.transactions.map((transaction) => transaction.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
}
