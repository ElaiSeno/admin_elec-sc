// TEST lang to for login 

// script.js
document.getElementById('AdminLogin').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values of username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('inputPassword').value;

    // Log inputs for debugging purposes
    console.log('Username:', username);
    console.log('Password:', password);

   
    const correctUseruname = 'admin';
    const correctPassword = 'password123';

    // Simulate the backend request
    simulateBackendRequest(username, password)
        .then(isAuthenticated => {
            if (isAuthenticated) {
                // Redirect to another page if authentication is successful
                window.location.href = "/Home/index.html"; // Make sure this URL exists
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => {
            console.error('Error during authentication:', error);
            alert('An error occurred during authentication.');
        });
});

// Simulate a backend request
function simulateBackendRequest(username, password) {
    return new Promise((resolve, reject) => {
        // Simulate some delay like a real API call
        setTimeout(() => {
            if (username === 'admin' && password === 'password123') {
                resolve(true); // Correct credentials
            } else {
                resolve(false); // Incorrect credentials
            }
        }, 1000); // Simulating a 1-second delay
    });
}
