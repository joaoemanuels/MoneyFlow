export function initCardFormatter() {
  const form = document.querySelector(".ManageCard-form");
  if (!form) return;

  const numCardInput = form.querySelector('[name="numCard"]');
  const expiryInput = form.querySelector('[name="expiry"]');
  const cvvInput = form.querySelector('[name="cvv"]');

  numCardInput.addEventListener("input", () => {
    let value = numCardInput.value.replace(/\D/g, "");

    value = value.slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    numCardInput.value = value;
  });

  expiryInput.addEventListener("input", () => {
    let value = expiryInput.value.replace(/\D/g, "");

    if (value.length > 4) value = value.slice(0, 4);

    if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d+)/, "$1/$2");
    }

    expiryInput.value = value;
  });

  cvvInput.addEventListener("input", () => {
    cvvInput.value = cvvInput.value.replace(/\D/g, "").slice(0, 3);
  });
}
