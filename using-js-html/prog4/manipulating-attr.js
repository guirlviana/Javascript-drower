function verifyEnablement(){
    let selectedValue = document.querySelector('select').value
    if (selectedValue == 'disabled') {
        document.querySelector('input[name="some-text"]').disabled = true
        pElement = document.getElementById('message')
        pElement.innerText = 'desabilitado'
        pElement.style.color = 'white'
        pElement.style.backgroundColor = 'red'
    } else {
        document.querySelector('input[name="some-text"]').disabled = false
        pElement = document.getElementById('message')
        pElement.innerText = ''
        pElement.style.color = 'black'
        pElement.style.backgroundColor = 'transparent'

    }
}