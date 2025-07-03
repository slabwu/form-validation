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

$('email').addEventListener('blur', (e) => {
  let element = e.target
  if (element.validity.typeMismatch) {
    element.nextSibling.textContent = 'Please input a valid email address'
    element.classList.add('invalid')
  } else {
    element.nextSibling.textContent = ''
    element.classList.remove('invalid')
  }
})