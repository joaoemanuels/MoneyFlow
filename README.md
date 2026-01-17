# 💰 MoneyFlow

**MoneyFlow** é um dashboard de controle financeiro pessoal desenvolvido em **JavaScript puro (Vanilla JS)**. O objetivo do projeto é permitir que o usuário registre receitas e despesas, visualize o saldo e acompanhe sua vida financeira de forma simples, clara e organizada.

Este projeto foi criado com foco em **boas práticas de organização de código**, **separação de responsabilidades** e **escala**, mesmo sem o uso de frameworks.

---

## 🚀 Funcionalidades

* Adicionar receitas e despesas
* Remover transações
* Listagem completa de movimentações
* Cálculo automático de:

  * Total de receitas
  * Total de despesas
  * Saldo final
* Persistência de dados com `localStorage`
* Dados mockados para testes
* Interface simples e responsiva

---

## 🧠 Decisões Técnicas

O projeto foi estruturado para simular um ambiente real de aplicação, separando claramente cada responsabilidade:

* **UI**: manipulação de DOM e eventos
* **Services**: regras de negócio e cálculos
* **Data**: persistência de dados
* **Utils**: funções puras reutilizáveis
* **Styles**: organização visual escalável

Essa abordagem facilita manutenção, testes e futuras evoluções do sistema.

---

## 📁 Estrutura de Pastas

```
moneyflow/
│
├── index.html
├── README.md
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
│
├── styles/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── layout.css
│   └── components.css
│
├── scripts/
│   ├── app.js
│   │
│   ├── data/
│   │   └── storage.js
│   │
│   ├── services/
│   │   └── transactionsService.js
│   │
│   ├── utils/
│   │   ├── formatCurrency.js
│   │   ├── formatDate.js
│   │   └── generateId.js
│   │
│   └── ui/
│       ├── modal.js
│       ├── table.js
│       ├── summary.js
│       └── form.js
│
└── mock/
    └── transactions.json
```

---

## 🎨 Organização de Estilos (`styles/`)

* **variables.css** → cores, fontes e espaçamentos globais
* **components.css** → botões, inputs, cards e componentes reutilizáveis
* **layout.css** → estrutura da página (grid, header, sidebar)
* **global.css** → estilos globais
* **reset.css** → reset de estilos do navegador

Essa separação garante consistência visual e facilita a escalabilidade do layout.

---

## ⚙️ Arquitetura JavaScript

### `app.js`

Ponto de entrada da aplicação.

Responsável por:

* Inicializar o app
* Carregar transações
* Disparar renderizações
* Conectar UI com regras de negócio

---

### `data/storage.js`

Camada responsável exclusivamente pela comunicação com o `localStorage`.

Funções:

* Salvar dados
* Buscar dados
* Remover dados

---

### `services/`

Contém as regras de negócio da aplicação.

Exemplos:

* Adicionar transação
* Remover transação
* Calcular saldo
* Aplicar filtros

⚠️ **Nenhuma manipulação de DOM acontece aqui.**

---

### `utils/`

Funções puras e reutilizáveis:

* Formatação de moeda
* Formatação de datas
* Geração de IDs únicos

---

### `ui/`

Camada responsável apenas pela interface:

* Renderização de elementos
* Manipulação do DOM
* Eventos de usuário

Cada arquivo cuida de uma parte específica da tela.

---

## 🧪 Mock de Dados

A pasta `mock/` contém dados simulados utilizados para testes iniciais e desenvolvimento da interface.

Isso permite testar o comportamento da aplicação sem depender do `localStorage`.

---

## 🔮 Próximos Passos

* Filtro por período (mês/ano)
* Gráficos de despesas e receitas
* Edição de transações
* Exportação de dados (CSV)
* Tema escuro

---

## 👨‍💻 Autor

Desenvolvido por **João Emanuel**
Projeto criado para portfólio com foco em JavaScript puro e boas práticas de front-end.

