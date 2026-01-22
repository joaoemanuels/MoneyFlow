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

  console.log(totalIncome);

  return totalIncome;
}
