export function hiddenModal() {
  const btnplus = document.getElementById("btn-modal-plus");
  const modalplus = document.getElementById("modal-plus");

  const btnTrophy = document.getElementById("btn-modal-trophy");
  const modalTrophy = document.getElementById("modal-trophy");

  const btnConfig = document.getElementById("btn-modal-config");
  const modalConfig = document.getElementById("modal-config");

  const btnSuporte = document.getElementById("btn-modal-suporte");
  const modalSuporte = document.getElementById("modal-suporte");

  const btnCard = document.getElementById("btn-modal-card");
  const modalCard = document.getElementById("modal-card");
  const sidebar = document.querySelector(".sidebar-right");
  const openBtn = document.querySelector(".btn-open-sidebar");
  const closeBtn = document.querySelector(".btn-close-sidebar");

  const pairs = [
    { btn: btnplus, modal: modalplus },
    { btn: btnTrophy, modal: modalTrophy },
    { btn: btnConfig, modal: modalConfig },
    { btn: btnSuporte, modal: modalSuporte },
    { btn: btnCard, modal: modalCard },
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
      const currentModal = closeBtn.closest(
        "#modal-plus, #modal-trophy, #modal-config, #modal-suporte, #modal-card",
      );
      if (!currentModal) return;

      pairs.forEach(({ modal, btn }) => {
        if (modal === currentModal) {
          modal.classList.add("hidden");
          btn.classList.remove("active");
        }
      });
    });
  });

  openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}
