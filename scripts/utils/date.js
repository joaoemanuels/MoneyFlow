export function getLatestMonth(transactions) {
  if (!transactions || transactions.length === 0) return null;

  return transactions
    .map((t) => t.date.slice(0, 7))
    .sort((a, b) => b.localeCompare(a))[0];
}
