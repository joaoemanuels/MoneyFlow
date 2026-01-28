const canvas = document.getElementById("finance-chart");
const ctx = canvas.getContext("2d");

const padding = 50;

const chart = {
  top: padding,
  bottom: canvas.height - padding,
  left: padding,
  right: canvas.width,
};

const maxValue = 300000;
const steps = 4;
const stepValue = maxValue / steps;

ctx.strokeStyle = "#e0e0e0";
ctx.fillStyle = "#636e72";
ctx.font = "12px Arial";

for (let i = 0; i <= steps; i++) {
  const value = maxValue - i * stepValue;
  const y = chart.top + (i * (chart.bottom - chart.top)) / steps;

  // linha horizontal
  ctx.beginPath();
  ctx.moveTo(chart.left, y);
  ctx.lineTo(chart.right, y);
  ctx.stroke();

  // texto (300k, 200k...)
  ctx.fillText(`${value / 1000}k`, 10, y + 4);
}

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const gap = (chart.right - chart.left) / months.length;

months.forEach((month, index) => {
  const x = chart.left + gap * index + gap / 2;

  ctx.fillText(month, x - 10, canvas.height - 15);
});

const data = [
  120000, 180000, 90000, 200000, 150000, 220000, 170000, 140000, 140000, 140000,
  140000,
];

data.forEach((value, index) => {
  const barHeight = (value / maxValue) * (chart.bottom - chart.top);

  const x = chart.left + gap * index + 10;
  const y = chart.bottom - barHeight;

  ctx.fillStyle = "#6c5ce7";
  ctx.fillRect(x, y, gap - 20, barHeight);
});
