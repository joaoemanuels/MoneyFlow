import {
  getTotalIncome,
  getTotalExpense,
  getExpenseByCategory,
  getMonthlyIncome,
  getMonthlyExpense,
} from "../services/income.js";

import { formatCurrency } from "../utils/formatCurrency.js";

export function renderCards() {
  const saldo = document.getElementById("total-balance");
  const entrada = document.getElementById("total-income");
  const investimento = document.getElementById("total-invested");
  const saida = document.getElementById("total-expense");

  const totalIncome = getTotalIncome();
  const totalExpense = getTotalExpense();

  const monthlyIncome = getMonthlyIncome();
  const monthlyExpense = getMonthlyExpense();

  const saldoDisponivel = totalIncome - totalExpense;

  const expensesByCategory = getExpenseByCategory();
  const totalInvestido = expensesByCategory["Investimentos"] || 0;

  saldo.textContent = formatCurrency(saldoDisponivel);
  entrada.textContent = formatCurrency(monthlyIncome);
  saida.textContent = formatCurrency(monthlyExpense);
  investimento.textContent = formatCurrency(totalInvestido);
}
