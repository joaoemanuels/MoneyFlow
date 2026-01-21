const nome = "joao";

export function initModal() {
  
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  }

  document.querySelector("#dashboard-greeting").textContent =
    `Olá ${nome}, ${getGreeting()}`;
}
