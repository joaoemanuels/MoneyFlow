import { state } from "../data/storage.js";

export function saudacaoPorPeriodo() {
  const hora = new Date().getHours();

  if (hora >= 5 && hora < 12) {
    return "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

const nome = state.user.name;
const elemento = document.getElementById("dashboard-greeting");
elemento.textContent = `Olá ${nome}, ${saudacaoPorPeriodo()}!`;

const elementoSideBar = document.getElementById("siderbar-greeting");
elementoSideBar.textContent = `${nome}`;
