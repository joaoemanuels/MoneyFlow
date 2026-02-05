export function initCardManager() {
  const form = document.querySelector(".ManageCard-form");
  const cardNumberEl = document.querySelector(".account-card__number");
  const holderValueEl = document.querySelector(".account-card__holder .value");
  const expiryValueEl = document.querySelector(".account-card__expiry .value");
  const brandValueEl = document.querySelector(".account-card__brand .value");
  const cvvValueEl = document.querySelector(".account-card__cvv .value");
  const manageBtn = document.getElementById("btn-modal-card");

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

    if (cleanNumber.length === 16) {
      const lastFour = cleanNumber.slice(-4);
      cardNumberEl.textContent = `•••• •••• •••• ${lastFour}`;
      cardNumberEl.classList.remove("placeholder");
    } else {
      cardNumberEl.textContent = "•••• •••• •••• ••••";
      cardNumberEl.classList.add("placeholder");
    }

    holderValueEl.textContent = card.holder;
    holderValueEl.classList.remove("placeholder");

    expiryValueEl.textContent = card.expiry;
    expiryValueEl.classList.remove("placeholder");

    brandValueEl.textContent = card.brand;
    brandValueEl.classList.remove("placeholder");

    cvvValueEl.textContent = card.cvv;
    cvvValueEl.classList.remove("placeholder");
  }
}
