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

  const pairs = [
    { btn: btnGraphy, modal: modalGraphy },
    { btn: btnCard, modal: modalCard },
    { btn: btnTrophy, modal: modalTrophy },
    { btn: btnConfig, modal: modalConfig },
    { btn: btnSuporte, modal: modalSuporte },
  ];

  function toggleModal(targetModal, targetBtn) {
    const isOpen = !targetModal.classList.contains("hidden");

    pairs.forEach(({ modal, btn }) => {
      modal.classList.add("hidden");
      btn.classList.remove("active");
    });

    if (!isOpen) {
      targetModal.classList.remove("hidden");
      targetBtn.classList.add("active");
    }
  }

  pairs.forEach(({ btn, modal }) => {
    btn.addEventListener("click", () => {
      toggleModal(modal, btn);
    });
  });

  const closeBtns = document.querySelectorAll(".modal-close");

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");

      pairs.forEach(({ modal: m, btn }) => {
        if (m === modal) {
          m.classList.add("hidden");
          btn.classList.remove("active");
        }
      });
    });
  });
}
