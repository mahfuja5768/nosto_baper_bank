const depositInput = document.getElementById(id);
const depositAmount = document.getElementById(id);

function submitBtn(id) {
  document.getElementById(id).addEventListener("click", () => {
    const inputField = document.getElementById(id);
    const amount = document.getElementById(id);
    const amountValue = parseFloat(depositAmount.innerText);
    const inputFieldValue = parseFloat(inputField.value);
  });
}
