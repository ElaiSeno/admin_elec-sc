// Show Password
const passwordInput = document.getElementById('inputPassword');
const showPasswordCheckbox = document.getElementById('showPassword');
showPasswordCheckbox.addEventListener('change', function () {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});


// TEST Database for logIn
document.getElementById('AdminLogin').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('inputPassword').value;

    console.log('Username:', username);
    console.log('Password:', password);
    
    // Database For logIn
    const correctUseruname = 'admin';
    const correctPassword = 'password123';

    simulateBackendRequest(username, password)
        .then(isAuthenticated => {
            if (isAuthenticated) {
                window.location.href = "/Home/index.html";
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => {
            console.error('Error during authentication:', error);
            alert('An error occurred during authentication.');
        });
});

function simulateBackendRequest(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'password123') {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000); // Simulating a 1-second delay
    });
}
