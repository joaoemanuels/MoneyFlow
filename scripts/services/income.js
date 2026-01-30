import { state } from "../data/storage.js";

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

  const months = transacoes.map((transacao) => {
    const parts = transacao.date.split("-");
    const year = parts[0];
    const month = parts[1];

    return `${year}-${month}`;
  });

  months.sort((a, b) => b.localeCompare(a));

  const latestMonth = months[0];

  const monthlyIncome = transacoes.filter((transacao) => {
    const parts = transacao.date.split("-");
    const year = parts[0];
    const month = parts[1];
    const transactionMonth = `${year}-${month}`;

    return transacao.type === "income" && transactionMonth === latestMonth;
  });

  const total = monthlyIncome.reduce(
    (acc, transacao) => acc + transacao.amount,
    0,
  );

  return total;
}

export function getMonthlyExpense() {
  const transacoes = state.transactions;

  const months = transacoes.map((transacao) => {
    const parts = transacao.date.split("-");
    const year = parts[0];
    const month = parts[1];

    return `${year}-${month}`;
  });

  months.sort((a, b) => b.localeCompare(a));

  const latestMonth = months[0];

  const monthlyIncome = transacoes.filter((transacao) => {
    const parts = transacao.date.split("-");
    const year = parts[0];
    const month = parts[1];
    const transactionMonth = `${year}-${month}`;

    return transacao.type === "expense" && transactionMonth === latestMonth;
  });

  const total = monthlyIncome.reduce(
    (acc, transacao) => acc + transacao.amount,
    0,
  );

  return total;
}
