import { state } from "../data/storage.js";
import { getLatestMonth } from "../utils/date.js";

export function getTotalIncome() {
  const transacoes = state.transactions;

  const transacoesIncome = transacoes.filter((transacao) => {
    return transacao.type === "income";
  });

  const totalIncome = transacoesIncome.reduce(
    (acc, transacao) => acc + transacao.amount,
    0,
  );

  return totalIncome;
}

export function getTotalExpense() {
  const transacoes = state.transactions;

  const transacoesExpense = transacoes.filter((transacao) => {
    return transacao.type === "expense";
  });

  const totalExpense = transacoesExpense.reduce(
    (acc, transacao) => acc + transacao.amount,
    0,
  );

  return totalExpense;
}

export function getExpenseByCategory() {
  const transacoes = state.transactions;

  const transacoesCategory = transacoes.filter((transacao) => {
    return transacao.type === "expense";
  });

  const totalExpenseCategory = transacoesCategory.reduce((acc, transacao) => {
    acc[transacao.category] = (acc[transacao.category] || 0) + transacao.amount;

    return acc;
  }, {});

  return totalExpenseCategory;
}

export function getMonthlyIncome() {
  const transacoes = state.transactions;

  const latestMonth = getLatestMonth(transacoes, "income");
  if (!latestMonth) return 0;

  return transacoes
    .filter((t) => t.type === "income" && t.date.startsWith(latestMonth))
    .reduce((acc, t) => acc + t.amount, 0);
}

export function getMonthlyExpense() {
  const transacoes = state.transactions;

  const latestMonth = getLatestMonth(transacoes, "expense");
  if (!latestMonth) return 0;

  return transacoes
    .filter((t) => t.type === "expense" && t.date.startsWith(latestMonth))
    .reduce((acc, t) => acc + t.amount, 0);
}
