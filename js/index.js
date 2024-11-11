document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'usuario' && password === 'usuario') {
        window.location.href = 'reserva.html';
    }
    else if (username === '' || password === '') {
        alert('Uno de los campos esta vacio, inegrese su información')
    }
    else {
        alert('Usuario o contraseña incorrectos');
    }
});
