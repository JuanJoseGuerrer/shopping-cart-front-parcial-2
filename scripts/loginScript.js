

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById("password").value
    console.log("valores - formulario",  {email, password})
    login(email, password)
})

function login(email, password){
    let message = '';
    let alertType = '';
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
    
            email: email,
            password: password,
            expiresInMins: 30,
          }),

          
    })

    .then(res => res.json())
    .then(console.log)
    .then((response) =>{
        if(response.status === 200){
            alertType = 'success'
            message = 'Inicio de sesión exitoso';
            console.log('respuesta correcta'+ response)
            alert(alertType, message)
            response.json().then((data) => {
                localStorage.setItem('token', data.token)
            })            
            setTimeout(() => {
                location.href = '../pages/inicio.html'
            }, 2000)
        }
        else{
            alertType = 'danger'
            message = 'Correo o contraseña incorrectos.';
            alert(alertType, message)
        }        
    })

    .catch((error) =>{
        alertType = 'danger'
        message = 'Errorinesperado' + error
        alert(alertType, message)
    })

}

function alert(alertType, message){ 
    const alert = `
        <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `
    document.getElementById('alert').innerHTML = alert
 }