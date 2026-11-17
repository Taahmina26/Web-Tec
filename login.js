window.onload = function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.onsubmit = function (e) {
        // Prevent default form submission to run client-side validation
        e.preventDefault();

        // Get input values
        const role = document.getElementById("role").value;
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        // Get error display spans and message box
        const roleError = document.getElementById("roleError");
        const usernameError = document.getElementById("usernameError");
        const passwordError = document.getElementById("passwordError");
        const loginMessage = document.getElementById("loginMessage");

        // Clear previous error messages
        roleError.innerHTML = "";
        usernameError.innerHTML = "";
        passwordError.innerHTML = "";
        loginMessage.innerHTML = "";

        let isValid = true;

        // 1. User Category / Role Validation
        if (role === "") {
            roleError.innerHTML = "Please select a user role.";
            isValid = false;
        }

        // 2. Username / Email Validation
        if (username === "") {
            usernameError.innerHTML = "Username or Email cannot be empty.";
            isValid = false;
        } else if (username.includes("@")) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(username)) {
                usernameError.innerHTML = "Enter a valid email address.";
                isValid = false;
            }
        }

        // 3. Password Validation
        if (password === "") {
            passwordError.innerHTML = "Password cannot be empty.";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.innerHTML = "Password must contain at least 6 characters.";
            isValid = false;
        }

        // If all checks pass: reset form and redirect to homepage.html
        if (isValid) {
            loginMessage.style.color = "green";
            loginMessage.innerHTML = "Login Successful! Redirecting to Home...";

            loginForm.reset();

            setTimeout(function () {
                window.location.href = "homepage.html";
            }, 1500);
        }
    };

    // Clear error messages when user clicks the Clear/Reset button
    loginForm.onreset = function () {
        document.getElementById("roleError").innerHTML = "";
        document.getElementById("usernameError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("loginMessage").innerHTML = "";
    };
};