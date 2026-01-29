export const state = {
  user: {
    name: "João",
  },
  transactions: [
    // ==========================
    // Fevereiro 2025
    // ==========================
    { id: 1, title: "Salário", type: "income", category: "Trabalho", amount: 1900, date: "2025-02-05" },
    { id: 2, title: "Mercado", type: "expense", category: "Alimentação", amount: 260, date: "2025-02-10" },
    { id: 3, title: "Academia", type: "expense", category: "Saúde", amount: 85, date: "2025-02-03" },
    { id: 4, title: "Netflix", type: "expense", category: "Assinaturas", amount: 39.9, date: "2025-02-02" },
    { id: 5, title: "Aluguel", type: "expense", category: "Moradia", amount: 620, date: "2025-02-06" },
    { id: 6, title: "Tesouro Selic", type: "expense", category: "Investimentos", amount: 200, date: "2025-02-15" },

    // ==========================
    // Março 2025
    // ==========================
    { id: 7, title: "Salário", type: "income", category: "Trabalho", amount: 1950, date: "2025-03-05" },
    { id: 8, title: "Freelance Landing Page", type: "income", category: "Freelance", amount: 400, date: "2025-03-18" },
    { id: 9, title: "Internet", type: "expense", category: "Serviços", amount: 120, date: "2025-03-10" },
    { id: 10, title: "Mercado", type: "expense", category: "Alimentação", amount: 280, date: "2025-03-12" },
    { id: 11, title: "Cinema", type: "expense", category: "Lazer", amount: 60, date: "2025-03-22" },
    { id: 12, title: "CDB", type: "expense", category: "Investimentos", amount: 300, date: "2025-03-25" },

    // ==========================
    // Abril 2025
    // ==========================
    { id: 13, title: "Salário", type: "income", category: "Trabalho", amount: 2000, date: "2025-04-05" },
    { id: 14, title: "Spotify", type: "expense", category: "Assinaturas", amount: 21.9, date: "2025-04-02" },
    { id: 15, title: "Conta de Luz", type: "expense", category: "Moradia", amount: 170, date: "2025-04-08" },
    { id: 16, title: "Mercado", type: "expense", category: "Alimentação", amount: 290, date: "2025-04-11" },
    { id: 17, title: "Venda Template", type: "income", category: "Vendas", amount: 250, date: "2025-04-20" },
    { id: 18, title: "Tesouro IPCA+", type: "expense", category: "Investimentos", amount: 350, date: "2025-04-18" },

    // ==========================
    // Maio 2025
    // ==========================
    { id: 19, title: "Salário", type: "income", category: "Trabalho", amount: 2050, date: "2025-05-05" },
    { id: 20, title: "Freelance Site", type: "income", category: "Freelance", amount: 600, date: "2025-05-16" },
    { id: 21, title: "Internet", type: "expense", category: "Serviços", amount: 120, date: "2025-05-10" },
    { id: 22, title: "Aluguel", type: "expense", category: "Moradia", amount: 630, date: "2025-05-06" },
    { id: 23, title: "Lazer Restaurante", type: "expense", category: "Lazer", amount: 120, date: "2025-05-21" },
    { id: 24, title: "LCI", type: "expense", category: "Investimentos", amount: 300, date: "2025-05-25" },

    // ==========================
    // Junho 2025
    // ==========================
    { id: 25, title: "Salário", type: "income", category: "Trabalho", amount: 2100, date: "2025-06-05" },
    { id: 26, title: "Venda Landing Page", type: "income", category: "Vendas", amount: 700, date: "2025-06-19" },
    { id: 27, title: "Mercado", type: "expense", category: "Alimentação", amount: 310, date: "2025-06-12" },
    { id: 28, title: "Academia", type: "expense", category: "Saúde", amount: 90, date: "2025-06-03" },
    { id: 29, title: "Assinatura Adobe", type: "expense", category: "Assinaturas", amount: 99, date: "2025-06-02" },
    { id: 30, title: "CDB", type: "expense", category: "Investimentos", amount: 400, date: "2025-06-26" },

    // ==========================
    // Julho 2025
    // ==========================
    { id: 31, title: "Salário", type: "income", category: "Trabalho", amount: 2150, date: "2025-07-05" },
    { id: 32, title: "Freelance E-commerce", type: "income", category: "Freelance", amount: 900, date: "2025-07-18" },
    { id: 33, title: "Internet", type: "expense", category: "Serviços", amount: 120, date: "2025-07-10" },
    { id: 34, title: "Mercado", type: "expense", category: "Alimentação", amount: 300, date: "2025-07-12" },
    { id: 35, title: "Cinema", type: "expense", category: "Lazer", amount: 50, date: "2025-07-22" },
    { id: 36, title: "Tesouro Selic", type: "expense", category: "Investimentos", amount: 250, date: "2025-07-28" },

    // ==========================
    // Agosto 2025
    // ==========================
    { id: 37, title: "Salário", type: "income", category: "Trabalho", amount: 2200, date: "2025-08-05" },
    { id: 38, title: "Venda Plugin", type: "income", category: "Vendas", amount: 500, date: "2025-08-21" },
    { id: 39, title: "Aluguel", type: "expense", category: "Moradia", amount: 640, date: "2025-08-06" },
    { id: 40, title: "Spotify", type: "expense", category: "Assinaturas", amount: 21.9, date: "2025-08-02" },
    { id: 41, title: "Mercado", type: "expense", category: "Alimentação", amount: 320, date: "2025-08-13" },
    { id: 42, title: "LCI", type: "expense", category: "Investimentos", amount: 500, date: "2025-08-25" },

    // ==========================
    // Setembro 2025
    // ==========================
    { id: 43, title: "Salário", type: "income", category: "Trabalho", amount: 2250, date: "2025-09-05" },
    { id: 44, title: "Freelance Blog", type: "income", category: "Freelance", amount: 600, date: "2025-09-17" },
    { id: 45, title: "Internet", type: "expense", category: "Serviços", amount: 120, date: "2025-09-10" },
    { id: 46, title: "Lazer Viagem", type: "expense", category: "Lazer", amount: 380, date: "2025-09-20" },
    { id: 47, title: "Plano de Saúde", type: "expense", category: "Saúde", amount: 150, date: "2025-09-03" },
    { id: 48, title: "CDB", type: "expense", category: "Investimentos", amount: 600, date: "2025-09-27" },

    // ==========================
    // Outubro 2025
    // ==========================
    { id: 49, title: "Salário", type: "income", category: "Trabalho", amount: 2300, date: "2025-10-05" },
    { id: 50, title: "Venda Site", type: "income", category: "Vendas", amount: 900, date: "2025-10-19" },
    { id: 51, title: "Conta de Luz", type: "expense", category: "Moradia", amount: 180, date: "2025-10-08" },
    { id: 52, title: "Mercado", type: "expense", category: "Alimentação", amount: 310, date: "2025-10-12" },
    { id: 53, title: "Netflix", type: "expense", category: "Assinaturas", amount: 39.9, date: "2025-10-02" },
    { id: 54, title: "Tesouro IPCA+", type: "expense", category: "Investimentos", amount: 700, date: "2025-10-26" },

    // ==========================
    // Novembro 2025
    // ==========================
    { id: 55, title: "Salário", type: "income", category: "Trabalho", amount: 2350, date: "2025-11-05" },
    { id: 56, title: "Freelance Institucional", type: "income", category: "Freelance", amount: 800, date: "2025-11-18" },
    { id: 57, title: "Aluguel", type: "expense", category: "Moradia", amount: 650, date: "2025-11-06" },
    { id: 58, title: "Cinema", type: "expense", category: "Lazer", amount: 45, date: "2025-11-20" },
    { id: 59, title: "Internet", type: "expense", category: "Serviços", amount: 120, date: "2025-11-10" },
    { id: 60, title: "Tesouro Selic", type: "expense", category: "Investimentos", amount: 400, date: "2025-11-28" },

    // ==========================
    // Dezembro 2025
    // ==========================
    { id: 61, title: "Salário", type: "income", category: "Trabalho", amount: 2400, date: "2025-12-05" },
    { id: 62, title: "Venda Template", type: "income", category: "Vendas", amount: 300, date: "2025-12-20" },
    { id: 63, title: "Mercado", type: "expense", category: "Alimentação", amount: 330, date: "2025-12-12" },
    { id: 64, title: "Presente Natal", type: "expense", category: "Lazer", amount: 220, date: "2025-12-22" },
    { id: 65, title: "Spotify", type: "expense", category: "Assinaturas", amount: 21.9, date: "2025-12-02" },
    { id: 66, title: "LCI", type: "expense", category: "Investimentos", amount: 500, date: "2025-12-26" },

    // ==========================
    // Janeiro 2026 (mais recente)
    // ==========================
    { id: 67, title: "Salário", type: "income", category: "Trabalho", amount: 2500, date: "2026-01-05" },
    { id: 68, title: "Freelance Landing Page", type: "income", category: "Freelance", amount: 800, date: "2026-01-14" },
    { id: 69, title: "Aluguel", type: "expense", category: "Moradia", amount: 660, date: "2026-01-06" },
    { id: 70, title: "Internet", type: "expense", category: "Serviços", amount: 120, date: "2026-01-10" },
    { id: 71, title: "Mercado", type: "expense", category: "Alimentação", amount: 300, date: "2026-01-12" },
    { id: 72, title: "CDB", type: "expense", category: "Investimentos", amount: 900, date: "2026-01-25" },
  ],
};
