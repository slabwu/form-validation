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