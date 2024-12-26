document.getElementById('openAuthModalButton').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'block';
});

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

document.getElementById('closeModalButton').addEventListener('click', function() {
    closeModal();
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();

    document.getElementById('login').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    let valid = true;

    if (!login || !emailRegex.test(login)) {
        document.getElementById('login').classList.add('error');
        valid = false;
    }
    if (!password) {
        document.getElementById('password').classList.add('error');
        valid = false;
    }

    if (valid) {
        localStorage.setItem('username', login);
        document.querySelector('.user-name').textContent = login;
        document.querySelector('.user-name').style.display = 'inline';
        document.getElementById('openAuthModalButton').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'inline-block';
        closeModal();
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Заповніть усі поля.');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('username');
    document.querySelector('.user-name').textContent = '';
    document.querySelector('.user-name').style.display = 'none';
    document.getElementById('openAuthModalButton').style.display = 'inline-block';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
});

window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.querySelector('.user-name').textContent = username;
        document.querySelector('.user-name').style.display = 'inline';
        document.getElementById('openAuthModalButton').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'inline-block';
    }
};
