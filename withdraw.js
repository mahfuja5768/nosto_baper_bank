document.getElementById("withdraw_btn").addEventListener("click", () => {
  const inputValue = getInputValue("withdraw_input");
  const amountValue = getAmountValue("withdraw_amount");
  const previousAmount = parseFloat(amountValue.innerText);
  const totalAmount = getAmountValue("total_amount");
  const previousTotalAmount = parseFloat(totalAmount.innerText);

  if (inputValue < previousTotalAmount) {
    const newAmount = previousAmount + inputValue;
    amountValue.innerText = newAmount;

    ///total amount
    const newTotalAmount = previousTotalAmount - inputValue;
    totalAmount.innerText = newTotalAmount;
  }
  else{
    return alert('Sorry! your account has not that much money.')
  }
});
