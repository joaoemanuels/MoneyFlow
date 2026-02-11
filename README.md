# MoneyFlow

**MoneyFlow** é um dashboard de controle financeiro pessoal desenvolvido em **JavaScript (Vanilla JS)**. O objetivo do projeto é permitir que o usuário registre receitas e despesas, visualize o saldo e acompanhe sua vida financeira de forma simples, clara e organizada.

Este projeto foi criado com foco em **boas práticas de organização de código**, **separação de responsabilidades** e **escala**, mesmo sem o uso de frameworks.

Disponível no **moneyflow.site**

---

## Funcionalidades

- Adicionar receitas e despesas
- Listagem completa de movimentações
- Cálculo automático de:
  - Total de receitas
  - Total de despesas
  - Saldo final
- Dados mockados para testes
- Interface simples e responsiva

---

## Decisões Técnicas

O projeto foi estruturado para simular um ambiente real de aplicação, separando claramente cada responsabilidade:

- **UI**: manipulação de DOM e eventos
- **Services**: regras de negócio e cálculos
- **Data**: persistência de dados
- **Utils**: funções puras reutilizáveis
- **Styles**: organização visual escalável

Essa abordagem facilita manutenção, testes e futuras evoluções do sistema.

---

## Estrutura de Pastas

```
moneyflow/
│
├── index.html
│
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
│
├── styles/
│   ├── components.css
│   ├── global.css
│   ├── reset.css
│   ├── responsive.css
│   └── variables.css
│
├── pages/
│   └── history.html
│
├── scripts/
│   ├── app.js
│   │
│   ├── data/
│   │   └── storage.js
│   │
│   ├── services/
│   │   └── chartData.js
│   │   └── income.js
│   │   └── transactionsService.js
│   │
│   ├── utils/
│   │   ├── darkMode.js
│   │   ├── date.js
│   │   ├── formatDate.js
│   │   ├── formatCurrency.js
│   │   ├── formatDate.js
│   │   └── generateId.js
│   │
│   └── ui/
│       ├── accountCard.js
│       ├── calendar.js
│       ├── cards.js
│       ├── form.js
│       ├── greeting.js
│       ├── modal.js
│       ├── renderCharts.js
│       ├── search.js
│       ├── summary.js
│       └── table.js
│
└── README.md
```

---

## Organização de Estilos (`styles/`)

- **variables.css** → cores, fontes e espaçamentos globais
- **components.css** → botões, inputs, cards e componentes reutilizáveis
- **global.css** → estilos globais
- **reset.css** → reset de estilos do navegador

Essa separação garante consistência visual e facilita a escalabilidade do layout.

---

## Arquitetura JavaScript

### `app.js`

Ponto de entrada da aplicação.

Responsável por:

- Inicializar o app
- Carregar transações
- Disparar renderizações
- Conectar UI com regras de negócio

---

### `data/storage.js`

Funções:

- Salvar dados
- Buscar dados
- Remover dados

---

### `services/`

Contém as regras de negócio da aplicação.

Exemplos:

- Adicionar transação
- Calcular saldo
- Aplicar filtros

  **Nenhuma manipulação de DOM acontece aqui.**

---

### `utils/`

Funções puras e reutilizáveis:

- Formatação de moeda
- Formatação de datas
- Geração de IDs únicos

---

### `ui/`

Camada responsável apenas pela interface:

- Renderização de elementos
- Manipulação do DOM
- Eventos de usuário

Cada arquivo cuida de uma parte específica da tela.

---

## Autor

Desenvolvido por **João Emanuel**

Projeto criado para portfólio com foco em JavaScript e boas práticas de front-end.

