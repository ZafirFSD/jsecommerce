function showAlert(message) {
    const modalMessage = document.getElementById('customAlertMessage');
    modalMessage.textContent = message; 

    const alertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
    alertModal.show(); 
}

function handleSignup(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        showAlert("Passwords do not match!");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        showAlert("User already exists. Please log in.");
        return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('user', JSON.stringify({ username: email }));

    showAlert("Signup successful! Redirecting to login page.");
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000); 
}

document.querySelector('form').addEventListener('submit', handleSignup);

function handleLogin(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        showAlert("Login successful! Redirecting to home page.");

        localStorage.setItem('user', JSON.stringify({ username: email }));

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000); 
    } else {
        showAlert("Invalid email or password. Please try again.");
    }
}

document.querySelector('form').addEventListener('submit', handleLogin);

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user) {
      document.getElementById('profileDropdown').style.display = 'block';
      document.getElementById('viewProfile').addEventListener('click', () => {
        alert(`User: ${user.username}\nEdit Profile\nChange Password`);
      });
      document.getElementById('viewCart').addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
          alert(`Your Cart: ${cart.map(item => item.name).join(', ')}`);
        } else {
          alert('Your cart is empty.');
        }
      });
      document.getElementById('logout').addEventListener('click', () => {
        if (confirm('Are you sure you want to log out?')) {
          localStorage.removeItem('user');
          localStorage.removeItem('cart');
          document.getElementById('profileDropdown').style.display = 'none';
          alert('You have been logged out.');
          window.location.href = 'login.html';
        }
      });
    } else {
      document.getElementById('profileDropdown').style.display = 'none';
    }
  });
  
    
