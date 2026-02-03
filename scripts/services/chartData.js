import { state } from "../data/storage.js";

/* ======================
   CONFIGURAÇÕES GERAIS
====================== */
let canvas, ctx;
const padding = 50;

const chart = {
  top: padding,
  bottom: 0,
  left: padding,
  right: 0,
};

/* ======================
   MESES
====================== */
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

/* ======================
   ANO SELECIONADO
====================== */
let SELECTED_YEAR = new Date().getFullYear();

/* ======================
   INICIALIZAÇÃO
====================== */
export function initChart() {
  canvas = document.getElementById("finance-chart");
  if (!canvas) return;

  ctx = canvas.getContext("2d");

  chart.bottom = canvas.height - padding;
  chart.right = canvas.width - padding;

  const selectAno = document.querySelector("#selectAno");
  if (selectAno) {
    selectAno.addEventListener("change", (e) => {
      SELECTED_YEAR = Number(e.target.value);
      drawChart();
    });
  }

  drawChart();
}

/* ======================
   FUNÇÃO PRINCIPAL
====================== */
export function drawChart() {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const incomeData = Array(12).fill(0);
  const expenseData = Array(12).fill(0);

  state.transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    if (date.getFullYear() !== SELECTED_YEAR) return;

    const monthIndex = date.getMonth();

    if (transaction.type === "income") {
      incomeData[monthIndex] += transaction.amount;
    }

    if (transaction.type === "expense") {
      expenseData[monthIndex] += transaction.amount;
    }
  });

  /* ======================
     ESCALA (BASEADA NO TOTAL)
  ====================== */
  const totals = incomeData.map((income, i) => income + expenseData[i]);

  const maxValue = Math.max(...totals) * 1.2 || 1;
  const steps = 4;
  const stepValue = maxValue / steps;

  ctx.strokeStyle = "#e0e0e0";
  ctx.fillStyle = "#636e72";
  ctx.font = "12px Arial";

  // LINHAS HORIZONTAIS + VALORES
  for (let i = 0; i <= steps; i++) {
    const value = maxValue - i * stepValue;
    const y = chart.top + (i * (chart.bottom - chart.top)) / steps;

    ctx.beginPath();
    ctx.moveTo(chart.left, y);
    ctx.lineTo(chart.right, y);
    ctx.stroke();

    ctx.fillText(`R$ ${(value / 1000).toFixed(1)}k`, 5, y + 4);
  }

  // MESES NO EIXO X
  const gap = (chart.right - chart.left) / months.length;
  months.forEach((month, index) => {
    const x = chart.left + gap * index + gap / 2;
    ctx.fillText(month, x - 10, canvas.height - 15);
  });

  // BARRAS EMPILHADAS
  drawStackedBars(incomeData, expenseData, gap, maxValue);
}

/* ======================
   BARRAS EMPILHADAS
====================== */
function drawStackedBars(incomeData, expenseData, gap, maxValue) {
  const chartHeight = chart.bottom - chart.top;

  incomeData.forEach((income, index) => {
    const expense = expenseData[index];
    const total = income + expense;

    if (total === 0) return;

    const totalHeight = (total / maxValue) * chartHeight;

    const incomeHeight = (income / total) * totalHeight;
    const expenseHeight = (expense / total) * totalHeight;

    const x = chart.left + gap * index + 10;
    let y = chart.bottom;

    // EXPENSE (roxo) — base
    if (expense > 0) {
      ctx.fillStyle = "#6c5ce7";
      ctx.fillRect(x, y - expenseHeight, gap - 20, expenseHeight);
      y -= expenseHeight;
    }

    // INCOME (verde) — topo
    if (income > 0) {
      ctx.fillStyle = "#00b894";
      ctx.fillRect(x, y - incomeHeight, gap - 20, incomeHeight);
    }
  });
}
