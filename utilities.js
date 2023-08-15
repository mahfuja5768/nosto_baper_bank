function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = '';
  return inputFieldValue;
}
function getAmountValue(id) {
  const amountField = document.getElementById(id);
  return amountField;
}
