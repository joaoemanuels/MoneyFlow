export function hiddenModal() {
  const btnGraphy = document.getElementById("btn-modal-graphy");
  const modalGraphy = document.getElementById("modal-graphy");

  const btnCard = document.getElementById("btn-modal-card");
  const modalCard = document.getElementById("modal-card");

  const btnTrophy = document.getElementById("btn-modal-trophy");
  const modalTrophy = document.getElementById("modal-trophy");

  const btnConfig = document.getElementById("btn-modal-config");
  const modalConfig = document.getElementById("modal-config");

  const btnSuporte = document.getElementById("btn-modal-suporte");
  const modalSuporte = document.getElementById("modal-suporte");

  const modais = [
    modalGraphy,
    modalCard,
    modalTrophy,
    modalConfig,
    modalSuporte,
  ];

  function toggleModal(modal) {
    const isOpen = !modal.classList.contains("hidden");

    modais.forEach((m) => m.classList.add("hidden"));

    if (!isOpen) {
      modal.classList.remove("hidden");
    }
  }

  btnGraphy.addEventListener("click", function () {
    toggleModal(modalGraphy);
  });

  btnCard.addEventListener("click", function () {
    toggleModal(modalCard);
  });

  btnTrophy.addEventListener("click", function () {
    toggleModal(modalTrophy);
  });

  btnConfig.addEventListener("click", function () {
    toggleModal(modalConfig);
  });

  btnSuporte.addEventListener("click", function () {
    toggleModal(modalSuporte);
  });

  const closeBtns = document.querySelectorAll(".modal-close");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) modal.classList.add("hidden");
    });
  });
}
