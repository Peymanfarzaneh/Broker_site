const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const forgotPasswordContainer = document.querySelector('.forgot-password-container');

document.getElementById('switch-to-signup').addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', () => {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

document.getElementById('forgot-password').addEventListener('click', () => {
    loginContainer.style.display = 'none';
    forgotPasswordContainer.style.display = 'block';
});

document.getElementById('back-to-login').addEventListener('click', () => {
    forgotPasswordContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});
