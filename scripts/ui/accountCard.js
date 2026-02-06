export function initCardManager() {
  const form = document.querySelector(".ManageCard-form");
  const cardNumberEl = document.querySelector(".account-card__number");
  const holderValueEl = document.querySelector(".account-card__holder .value");
  const expiryValueEl = document.querySelector(".account-card__expiry .value");
  const brandValueEl = document.querySelector(".account-card__brand .value");
  const cvvValueEl = document.querySelector(".account-card__cvv .value");
  const manageBtn = document.getElementById("btn-modal-card");
  const deleteBtn = document.getElementById("btn-delete-card");

  if (
    !form ||
    !cardNumberEl ||
    !holderValueEl ||
    !expiryValueEl ||
    !brandValueEl ||
    !cvvValueEl ||
    !manageBtn
  ) {
    return;
  }

  let card = null;

  const numCardInput = form.querySelector('[name="numCard"]');
  const holderInput = form.querySelector('[name="holder"]');
  const expiryInput = form.querySelector('[name="expiry"]');
  const brandInput = form.querySelector('[name="brand"]');
  const cvvInput = form.querySelector('[name="cvv"]');

  manageBtn.addEventListener("click", fillFormIfExists);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    card = {
      number: numCardInput.value.trim(),
      holder: holderInput.value.trim(),
      brand: brandInput.value,
      expiry: expiryInput.value.trim(),
      cvv: cvvInput.value.trim(),
    };

    updateCardUI(card);
    form.reset();
  });

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (!card) {
        alert("Nenhum cartão para excluir.");
        return;
      }

      const confirmDelete = confirm("Deseja realmente excluir o cartão?");
      if (!confirmDelete) return;

      resetCard();
    });
  }

  function isFormValid() {
    const cardNumber = numCardInput.value.replace(/\D/g, "");
    const cvv = cvvInput.value.replace(/\D/g, "");
    const expiry = expiryInput.value.trim();
    const holder = holderInput.value.trim();
    const brand = brandInput.value;

    if (cardNumber.length !== 16) return false;
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) return false;
    if (!/^\d{3}$/.test(cvv)) return false;
    if (!holder) return false;
    if (!brand) return false;

    return true;
  }

  function fillFormIfExists() {
    if (!card) return;

    numCardInput.value = card.number;
    holderInput.value = card.holder;
    brandInput.value = card.brand;
    expiryInput.value = card.expiry;
    cvvInput.value = card.cvv;
  }

  function updateCardUI(card) {
    const cleanNumber = card.number.replace(/\D/g, "");

    cardNumberEl.textContent =
      cleanNumber.length === 16
        ? `•••• •••• •••• ${cleanNumber.slice(-4)}`
        : "•••• •••• •••• ••••";

    cardNumberEl.classList.remove("placeholder");

    holderValueEl.textContent = card.holder;
    holderValueEl.classList.remove("placeholder");

    expiryValueEl.textContent = card.expiry;
    expiryValueEl.classList.remove("placeholder");

    brandValueEl.textContent = card.brand;
    brandValueEl.classList.remove("placeholder");

    cvvValueEl.textContent = card.cvv;
    cvvValueEl.classList.remove("placeholder");
  }

  function resetCard() {
    card = null;

    cardNumberEl.textContent = "•••• •••• •••• ••••";
    cardNumberEl.classList.add("placeholder");

    holderValueEl.textContent = "••••";
    holderValueEl.classList.add("placeholder");

    expiryValueEl.textContent = "MM/AA";
    expiryValueEl.classList.add("placeholder");

    brandValueEl.textContent = "••••";
    brandValueEl.classList.add("placeholder");

    cvvValueEl.textContent = "•••";
    cvvValueEl.classList.add("placeholder");

    form.reset();
  }
}
