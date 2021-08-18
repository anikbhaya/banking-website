

const login = document.getElementById('login')
login.addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email == 'test@admin.com' && password == 123){
        window.location.href = "account.html";
    }
    else(
        console.log('wrong info')
    )
})


