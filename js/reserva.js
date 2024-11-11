document.getElementById('confirm-reservation').addEventListener('click', function() {
    const date = document.getElementById('reservation-date').value;
    const space = document.getElementById('space-selection').value;

    if (date && space) {
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        alert('Por favor, seleccione una fecha y un espacio.');
    }
});
