window.onload = function () {
    const visitorForm = document.getElementById("visitorForm");

    visitorForm.onsubmit = function (e) {
        // Prevent default form submission
        e.preventDefault();

        // Fetch form inputs
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;
        const phone = document.getElementById("phone").value.trim();
        const relation = document.getElementById("relation").value.trim();
        const inmateId = document.getElementById("inmate_id").value.trim();
        const idDocument = document.getElementById("id_document").value;
        const idProofNumber = document.getElementById("id_proof_number").value.trim();
        const address = document.getElementById("contact_address").value.trim();

        // Fetch error spans
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmError = document.getElementById("confirmError");
        const phoneError = document.getElementById("phoneError");
        const relationError = document.getElementById("relationError");
        const inmateError = document.getElementById("inmateError");
        const fileError = document.getElementById("fileError");
        const proofError = document.getElementById("proofError");
        const addressError = document.getElementById("addressError");
        const successMessage = document.getElementById("successMessage");

        // Clear all previous messages
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        passwordError.innerHTML = "";
        confirmError.innerHTML = "";
        phoneError.innerHTML = "";
        relationError.innerHTML = "";
        inmateError.innerHTML = "";
        fileError.innerHTML = "";
        proofError.innerHTML = "";
        addressError.innerHTML = "";
        successMessage.innerHTML = "";

        let isValid = true;

        // 1. Name Validation (Cannot be empty, alphabets & spaces only)
        const nameRegex = /^[A-Za-z\s]+$/;
        if (fullname === "") {
            nameError.innerHTML = "Full Name cannot be empty.";
            isValid = false;
        } else if (!nameRegex.test(fullname)) {
            nameError.innerHTML = "Name should contain only letters.";
            isValid = false;
        }

        // 2. Email Validation (Cannot be empty, valid email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.innerHTML = "Email Address cannot be empty.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.innerHTML = "Enter a valid email address (e.g., abc@gmail.com).";
            isValid = false;
        }

        // 3. Password Validation (Min 6 characters & at least one number)
        const passwordRegex = /^(?=.*[0-9])(?=.{6,})/;
        if (password === "") {
            passwordError.innerHTML = "Password cannot be empty.";
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            passwordError.innerHTML = "Password is too weak (minimum 6 characters and 1 number required).";
            isValid = false;
        }

        // 4. Confirm Password Validation
        if (confirmPassword === "") {
            confirmError.innerHTML = "Please confirm your password.";
            isValid = false;
        } else if (confirmPassword !== password) {
            confirmError.innerHTML = "Passwords do not match.";
            isValid = false;
        }

        // 5. Phone Number Validation (Only numeric values, 11 digits)
        const phoneRegex = /^[0-9]{11}$/;
        if (phone === "") {
            phoneError.innerHTML = "Phone number cannot be empty.";
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            phoneError.innerHTML = "Phone number must be 11 numeric digits.";
            isValid = false;
        }

        // 6. Unique Visitor Rule 1: Relation to Inmate (Letters and spaces only)
        if (relation === "") {
            relationError.innerHTML = "Relation to inmate cannot be empty.";
            isValid = false;
        } else if (!nameRegex.test(relation)) {
            relationError.innerHTML = "Relation should contain only letters.";
            isValid = false;
        }

        // 7. Unique Visitor Rule 2: Target Inmate ID format (e.g., INM-1024)
        const inmateRegex = /^INM-[0-9]{4,}$/i;
        if (inmateId === "") {
            inmateError.innerHTML = "Target Inmate ID cannot be empty.";
            isValid = false;
        } else if (!inmateRegex.test(inmateId)) {
            inmateError.innerHTML = "Inmate ID must follow format INM-XXXX (e.g., INM-1024).";
            isValid = false;
        }

        // 8. Unique Visitor Rule 3: National ID Document file upload check
        if (idDocument === "") {
            fileError.innerHTML = "Please upload your National ID document.";
            isValid = false;
        }

        // 9. Unique Visitor Rule 4: ID Proof Number (Numeric, 10 to 17 digits)
        const proofRegex = /^[0-9]{10,17}$/;
        if (idProofNumber === "") {
            proofError.innerHTML = "ID Proof Number cannot be empty.";
            isValid = false;
        } else if (!proofRegex.test(idProofNumber)) {
            proofError.innerHTML = "ID Proof Number must be 10 to 17 digits.";
            isValid = false;
        }

        // 10. Unique Visitor Rule 5: Contact Address (Minimum 10 characters)
        if (address === "") {
            addressError.innerHTML = "Contact Address cannot be empty.";
            isValid = false;
        } else if (address.length < 10) {
            addressError.innerHTML = "Please enter a complete address (at least 10 characters).";
            isValid = false;
        }

        // If all checks pass: reset form and redirect to login.html
        if (isValid) {
            successMessage.style.color = "green";
            successMessage.innerHTML = "Registration Successful! Redirecting to Login...";

            visitorForm.reset();

            setTimeout(function () {
                window.location.href = "login.html";
            }, 1500);
        }
    };

    // Clear all error messages when Clear Form button is clicked
    visitorForm.onreset = function () {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("confirmError").innerHTML = "";
        document.getElementById("phoneError").innerHTML = "";
        document.getElementById("relationError").innerHTML = "";
        document.getElementById("inmateError").innerHTML = "";
        document.getElementById("fileError").innerHTML = "";
        document.getElementById("proofError").innerHTML = "";
        document.getElementById("addressError").innerHTML = "";
        document.getElementById("successMessage").innerHTML = "";
    };
};