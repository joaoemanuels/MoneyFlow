export function getLatestMonth(transactions, type) {
  const months = transactions
    .filter((t) => t.type === type)
    .map((t) => t.date.slice(0, 7)); // YYYY-MM

  if (months.length === 0) return null;

  return months.sort((a, b) => b.localeCompare(a))[0];
}
