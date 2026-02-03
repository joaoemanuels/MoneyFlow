export function formatDate(date) {
  const parts = date.split("-");

  const day = parts[2];
  const month = parts[1];
  const year = parts[0];

  return `${day}/${month}/${year}`;
}

export function normalizeDate(date) {
  const [year, month, day] = date.split("-");
  return [
    date,
    `${day}/${month}`,
    `${month}/${year}`,
    `${day}/${month}/${year}`,
    year,
    month,
    day,
  ];
}
