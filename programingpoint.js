document.getElementById('login-submit').
    addEventListener('click', function () {
        //get email
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;
        //get password
        const passField = document.getElementById('user-pass');
        const userPass = passField.value;
        //check email and password
        if (userEmail == 'saiful@gmail.com' &&
            userPass == '12345') {
            window.location.href = 'dashboard.html';
        };

    });