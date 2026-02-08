const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const today = new Date().getDate();

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

monthYear.textContent = `${months[month]} ${year}`;

const firstDay = new Date(year, month, 1).getDay();
const totalDays = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
  const empty = document.createElement("span");
  calendarDays.appendChild(empty);
}

for (let day = 1; day <= totalDays; day++) {
  const span = document.createElement("span");

  if (today === day) {
    span.classList.add("active");
  }

  span.textContent = day;
  calendarDays.appendChild(span);
}
