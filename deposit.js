const depositInput = document.getElementById('deposit_input');
const depositAmount = document.getElementById('deposit_amount');


document.getElementById('deposit_btn').addEventListener('click', ()=>{
    const depositAmountValue = parseFloat(depositAmount.innerText);
    const depositInputValue = parseFloat(depositInput.value);
})