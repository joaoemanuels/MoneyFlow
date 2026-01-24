import {
  getTotalIncome,
  getTotalExpense,
  getExpenseByCategory,
} from "../services/income.js";
import { formatCurrency } from "../utils/formatCurrency.js";

const saldo = document.getElementById("total-balance");
const entrada = document.getElementById("total-income");
const investimento = document.getElementById("total-invested");
const saida = document.getElementById("total-expense");

const totalEntrada = getTotalIncome();
const totalSaida = getTotalExpense();
const saldoDisponivel = totalEntrada - totalSaida;

const expensesByCategory = getExpenseByCategory();
const totalInvestido = expensesByCategory["Investimentos"] || 0;

saldo.textContent = formatCurrency(saldoDisponivel);
entrada.textContent = formatCurrency(totalEntrada);
investimento.textContent = formatCurrency(totalInvestido);
saida.textContent = formatCurrency(totalSaida);