const form = document.querySelector('form')
const list = document.querySelector('.list')
const input = document.querySelector('input')
form.addEventListener('submit', (e) => {
    let value = input.value
    console.log(value)
    let li = document.createElement('div')
    li.innerHTML = `<div contentEditable='true'>${value}</div>`;

    li.classList.toggle('li')
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    li.append(checkbox)

    li.addEventListener('dblclick', () => {
        li.remove()
    })

    list.append(li)

    e.preventDefault()
    form.reset()
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            li.classList.add('nli')
            li.classList.remove('li')

        } else {
            li.classList.add('li')
            li.classList.remove('nli')
        }
    })



})

