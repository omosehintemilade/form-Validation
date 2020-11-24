// alert('hello')
let inputIcons = document.querySelectorAll('.input-icon')
    // console.log(inputIcons);
let form = document.querySelector('form')

let motherUsername = document.querySelector('.username')
let username = document.querySelector('#username')
let usernameP = document.querySelector('#username-p')

let motherEmail = document.querySelector('.email')
let email = document.querySelector('#email')
let emailP = document.querySelector('#email-p')

let motherPassword = document.querySelector('.password')
let password = document.querySelector('#password')
let passwordP = document.querySelector('#password-p')

let motherPasswordTwo = document.querySelector('.passwordTwo')
let passwordTwo = document.querySelector('#passwordTwo')
let passwordTwoP = document.querySelector('#passwordTwo-p')
    // console.log(username);
    // functions
function handleSubmit(e) {
    e.preventDefault();
    // console.log('hello');
    const usernameIcon = motherUsername.querySelector('.fa-exclamation-circle')
    const emailIcon = motherEmail.querySelector('.fa-exclamation-circle')
    const passwordIcon = motherPassword.querySelector('.fa-exclamation-circle')
    const passwordTwoIcon = motherPasswordTwo.querySelector('.fa-exclamation-circle')
        // const usernameIcon = motherUsername.querySelector('.fa-exclamation-circle')
    const usernameIconTwo = motherUsername.querySelector('.fa-check-circle')
    const emailIconTwo = motherEmail.querySelector('.fa-check-circle')
    const passwordIconTwo = motherPassword.querySelector('.fa-check-circle')
    const passwordTwoIconTwo = motherPasswordTwo.querySelector('.fa-check-circle')
        // console.log(usernameIconTwo);
    if (username.value === '') {
        usernameP.style.visibility = 'visible'
        motherUsername.style.border = 'red 1px solid'
        usernameIcon.style.display = 'block'
        usernameIconTwo.style.display = 'none'
    } else {
        usernameP.style.visibility = 'hidden'
        motherUsername.style.border = 'green 1px solid'
        usernameIcon.style.display = 'none'
        usernameIconTwo.style.display = 'block'
    }

    if (email.value === '') {
        emailP.style.visibility = 'visible'
        motherEmail.style.border = 'red 1px solid'
        emailIcon.style.display = 'block'
        emailIconTwo.style.display = 'none'
    } else {
        emailP.style.visibility = 'hidden'
        motherEmail.style.border = 'green 1px solid'
        emailIcon.style.display = 'none'
        emailIconTwo.style.display = 'block'

    }

    if (password.value === '') {
        passwordP.style.visibility = 'visible'
        motherPassword.style.border = 'red 1px solid'
        passwordIcon.style.display = 'block'
        passwordIconTwo.style.display = 'none'
    } else {
        passwordP.style.visibility = 'hidden'
        motherPassword.style.border = 'green 1px solid'
        passwordIcon.style.display = 'none'
        passwordIconTwo.style.display = 'block'
    }

    if (passwordTwo.value === '') {
        passwordTwoP.style.visibility = 'visible'
        motherPasswordTwo.style.border = 'red 1px solid'
        passwordTwoIcon.style.display = 'block'
        passwordTwoIconTwo.style.display = 'none'
    } else {
        passwordTwoP.style.visibility = 'hidden'
        motherPasswordTwo.style.border = 'green 1px solid'
        passwordTwoIcon.style.display = 'none'
        passwordTwoIconTwo.style.display = 'block'
    }

    if (passwordTwo.value != password.value) {
        passwordTwoP.style.visibility = 'visible'
        passwordTwoP.textContent = 'Password does not match'
        motherPasswordTwo.style.border = 'red 1px solid'
        passwordTwoIcon.style.display = 'block'
        passwordTwoIconTwo.style.display = 'none'
    }
    // this.reset()
}
form.addEventListener('submit', handleSubmit)
    // else {
    //     passwordTwoP.style.visibility = 'hidden'
    //     motherPasswordTwo.style.border = 'green 1px solid'
    //     passwordTwoIconTwo.style.display = 'none'
    //     passwordTwoIconTwo.style.display = 'block'
    // }
    //