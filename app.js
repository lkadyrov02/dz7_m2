import users from "./Models/Account";


console.log(users)


const userInput = document.querySelector('#user')
const passwordInput = document.querySelector('#pass')
const btn = document.querySelector('#btn')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    users.map((user) => {
        if (user.name === userInput.value && user.password === passwordInput.value) {
            alert('successfully')
        }
    })
})