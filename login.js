const email = document.getElementById('email');
const pass = document.getElementById('pass');
document.getElementById('submit').addEventListener('click', () =>{
    const emailValue = email.value;
    const passValue = pass.value;
    email.value = '';
    pass.value = '';
    if(emailValue === "myra" && passValue === 'myra'){
        window.location.href= "./bank.html";
        email.value = '';
        alert('Welcome to your baaper bank! please have fun with your tk.');
    }
    else{
        return alert('Onner takay nojor na diye nijer kaj koren!');
    }
    
})

