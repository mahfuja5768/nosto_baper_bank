
document.getElementById('deposit_btn').addEventListener('click', ()=>{
    const inputValue = getInputValue('deposit_input');
    const amountValue = getAmountValue('deposit_amount');
    const previousAmount = parseFloat(amountValue.innerText);
    const newAmount = previousAmount + inputValue;
    amountValue.innerText = newAmount;

    ///total amount
    const totalAmount = getAmountValue('total_amount');
    const previousTotalAmount = parseFloat(totalAmount.innerText);
    const newTotalAmount = previousTotalAmount + inputValue;
    totalAmount.innerText = newTotalAmount;
})


