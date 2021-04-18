

//*input js
document.getElementById('name').placeholder = '1234AA'
const allInputs = document.querySelectorAll('input');
for(const input of allInputs) {
    input.addEventListener('input', () => {
        const val = input.value
        if(!val) {
            input.parentElement.classList.add('empty')
        } 
        else {
            input.parentElement.classList.remove('empty')
        }
    })
}