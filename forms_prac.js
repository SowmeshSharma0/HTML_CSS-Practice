const usn_input = document.querySelector('.username input')
const pass_input = document.querySelector('.password input')

const usn_h1 = document.createElement('h1')
const pass_h1 = document.createElement('h1')

const form = document.querySelector('form')

// function isValidated(usn, pass){
//     if(usn.length() >= 4 && usn.length() <=10 && pass.length() >= 10)
//         return true
//     return false
// }

const isValidated = (usn, pass) => usn.length >= 4 && usn.length <=10 && pass.length >= 10

const isPassValid = (pass) => {
    const regex = /[^A-Za-z0-9]/;
    if(regex.test(pass) && !pass.includes(' '))
        return true

    return false
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const usn_val = String(usn_input.value)
    const pass_val = String(pass_input.value)

    console.log(usn_val, typeof(usn_val))

    if(isValidated(usn_val, pass_val) && isPassValid(pass_val))
    {
        usn_h1.innerText = usn_val
        pass_h1.innerText = pass_val

        document.querySelector('body').appendChild(usn_h1)
        document.querySelector('body').appendChild(pass_h1)
        return
    }
    
    alert("Username must be 4-10 Chars long and Password must be atleast 10 chars long")
})