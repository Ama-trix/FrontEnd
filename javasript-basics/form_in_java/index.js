
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const gender = document.getElementById('gender').value;

        let isValid = true;

        // Simple validation for username, email, password, phone, address, and gender
        if (username === '') {
            document.getElementById('usernameError').innerText = 'Please enter a username.';
            isValid = false;
        } else {
            document.getElementById('usernameError').innerText = '';
        }

        if (email === '') {
            document.getElementById('emailError').innerText = 'Please enter an email.';
            isValid = false;
        } else {
            document.getElementById('emailError').innerText = '';
        }

        if (password === '') {
            document.getElementById('passwordError').innerText = 'Please enter a password.';
            isValid = false;
        } else {
            document.getElementById('passwordError').innerText = '';
        }

        if (phone === '') {
            document.getElementById('phoneError').innerText = 'Please enter a phone number.';
            isValid = false;
        } else {
            document.getElementById('phoneError').innerText = '';
        }

        if (address === '') {
            document.getElementById('addressError').innerText = 'Please enter an address.';
            isValid = false;
        } else {
            document.getElementById('addressError').innerText = '';
        }

        if (gender === '') {
            document.getElementById('genderError').innerText = 'Please select a gender.';
            isValid = false;
        } else {
            document.getElementById('genderError').innerText = '';
        }

        if (isValid) {
            // Form is valid, you can submit it here
            alert('Form submitted successfully!');
            // For now, just resetting the form
            form.reset();
        }
    });
