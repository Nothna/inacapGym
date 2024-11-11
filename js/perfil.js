document.addEventListener('DOMContentLoaded', function() {

    const paymentForm = document.querySelector('.payment-screen form');
    const paymentMethodSelect = document.querySelector('#payment-method');
    const paymentAmount = document.querySelector('#payment-amount');
    const confirmPaymentButton = document.querySelector('.confirm-payment');

    let userInfo = {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        phone: '+56 9 1234 5678',
        address: 'Calle Ficticia 123, Santiago'
    };

    function displayProfileInfo() {
        const personalInfo = document.querySelector('.personal-info');
        personalInfo.innerHTML = `
            <h2>Datos Personales</h2>
            <p><strong>Nombre:</strong> ${userInfo.name}</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
            <p><strong>Teléfono:</strong> ${userInfo.phone}</p>
            <p><strong>Dirección:</strong> ${userInfo.address}</p>
            <button class="edit-profile">Editar Perfil</button>
        `;

        const editProfileButton = document.querySelector('.edit-profile');
        editProfileButton.addEventListener('click', editProfile);
    }

    displayProfileInfo();

    function editProfile() {
        const personalInfo = document.querySelector('.personal-info');
        const inputs = personalInfo.querySelectorAll('p');

        inputs.forEach(input => {
            const text = input.textContent.split(': ');
            input.innerHTML = `${text[0]}: <input type="text" value="${text[1]}" />`;
        });

        const editProfileButton = document.querySelector('.edit-profile');
        editProfileButton.textContent = 'Guardar Cambios';
        editProfileButton.classList.add('save-profile');
        editProfileButton.classList.remove('edit-profile');

        editProfileButton.removeEventListener('click', editProfile);
        editProfileButton.addEventListener('click', saveProfile);
    }

    function saveProfile() {
        const personalInfo = document.querySelector('.personal-info');
        const inputs = personalInfo.querySelectorAll('input');

        userInfo.name = inputs[0].value;
        userInfo.email = inputs[1].value;
        userInfo.phone = inputs[2].value;
        userInfo.address = inputs[3].value;

        alert('Perfil actualizado con éxito');
        
        displayProfileInfo();
    }

    confirmPaymentButton.addEventListener('click', function(e) {
        e.preventDefault();

        const paymentMethod = paymentMethodSelect.value;
        const amount = paymentAmount.value;

        alert(`Pago procesado con éxito\nMétodo: ${paymentMethod}\nMonto: ${amount}`);

        paymentForm.innerHTML = `
            <h2>Pago Realizado</h2>
            <p>Gracias por realizar el pago. Su membresía ha sido renovada con éxito.</p>
        `;
    });

});
