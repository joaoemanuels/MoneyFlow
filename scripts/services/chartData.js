import { state } from "../data/storage.js";

const canvas = document.getElementById("finance-chart");
const ctx = canvas.getContext("2d");

/* ======================
   CONFIGURAÇÕES GERAIS
====================== */
const padding = 50;

const chart = {
  top: padding,
  bottom: canvas.height - padding,
  left: padding,
  right: canvas.width - padding,
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
   GERAR DADOS (DESPESAS)
====================== */

let SELECTED_YEAR = 2025;

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const data = Array(12).fill(0);

  state.transactions.forEach((transaction) => {
    if (transaction.type !== "expense") return;

    const date = new Date(transaction.date);
    const year = date.getFullYear();

    if (year !== SELECTED_YEAR) return;

    const monthIndex = date.getMonth();
    data[monthIndex] += transaction.amount;
  });

  /* ======================
   ESCALA DO GRÁFICO
====================== */
  const maxValue = Math.max(...data) * 1.2 || 1;
  const steps = 4;
  const stepValue = maxValue / steps;

  /* ======================
   ESTILOS
====================== */
  ctx.strokeStyle = "#e0e0e0";
  ctx.fillStyle = "#636e72";
  ctx.font = "12px Arial";

  /* ======================
   LINHAS HORIZONTAIS + VALORES
====================== */
  for (let i = 0; i <= steps; i++) {
    const value = maxValue - i * stepValue;
    const y = chart.top + (i * (chart.bottom - chart.top)) / steps;

    // linha
    ctx.beginPath();
    ctx.moveTo(chart.left, y);
    ctx.lineTo(chart.right, y);
    ctx.stroke();

    // texto (ex: 2k, 4k)
    ctx.fillText(`R$ ${(value / 1000).toFixed(1)}k`, 5, y + 4);
  }

  /* ======================
   MESES NO EIXO X
====================== */
  const gap = (chart.right - chart.left) / months.length;

  months.forEach((month, index) => {
    const x = chart.left + gap * index + gap / 2;
    ctx.fillText(month, x - 10, canvas.height - 15);
  });

  /* ======================
   BARRAS
====================== */
  data.forEach((value, index) => {
    const barHeight = (value / maxValue) * (chart.bottom - chart.top);

    const x = chart.left + gap * index + 10;
    const y = chart.bottom - barHeight;

    ctx.fillStyle = "#6c5ce7";
    ctx.fillRect(x, y, gap - 20, barHeight);
  });

  const selectAno = document.querySelector("#selectAno");

  selectAno.addEventListener("change", (e) => {
    SELECTED_YEAR = Number(e.target.value);
    drawChart();
  });
}

drawChart();
