document.addEventListener('DOMContentLoaded', function() {
var form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirm-password').value;
var usernameError = document.getElementById('username-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var confirmPasswordError = document.getElementById('confirm-password-error');
var isValid = true;
if (username.trim() === '') {
usernameError.textContent = 'Имя пользователя обязательно';
isValid = false;
} else {
usernameError.textContent = '';
}
if (email.trim() === '') {
emailError.textContent = 'Email обязателен';
isValid = false;
} else {
emailError.textContent = '';
}
if (password.trim() === '') {
passwordError.textContent = 'Пароль обязателен';
isValid = false;
} else {
passwordError.textContent = '';
}
 if (confirmPassword.trim() === '') {
confirmPasswordError.textContent = 'Подтверждение пароля обязательно';
isValid = false;
} else if (password !== confirmPassword) {
confirmPasswordError.textContent = 'Пароли не совпадают';
isValid = false;
} else {
confirmPasswordError.textContent = '';
}
if (!isValid) {
event.preventDefault();
}
});
});