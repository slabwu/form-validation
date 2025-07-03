const fields = document.querySelectorAll('input')
const form = document.querySelector('form')

fields.forEach((field) => {
  const title = document.createElement('h3')
  title.innerText = field.id[0].toUpperCase() + field.id.slice(1)
  title.classList.add('title')
  field.before(title)
  
  const error = document.createElement('div')
  error.classList.add('error')
  error.innerText = ''
  field.after(error)
})

const $ = (id) => document.getElementById(id)

const validation = {
    email: {
        condition: i => i.validity.typeMismatch,
        message: 'Please input a valid email address'
    },
    'postal code': {
        condition: i => i.matches(':invalid') && i.value != '',
        message: 'Postal code must be between 4-6 digits'
    }
}

for (const field of Object.keys(validation)) {
    $(field).addEventListener('blur', (e) => {
        let element = e.target
        if (validation[field].condition(element)) {
            element.nextSibling.textContent = validation[field].message
            element.classList.add('invalid')
        } else {
            element.nextSibling.textContent = ''
            element.classList.remove('invalid')
        }
    })
}