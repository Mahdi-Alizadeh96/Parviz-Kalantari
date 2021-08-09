// Switch 


const getSwitch = document.querySelector('.switch span');

let    getInput = document.querySelector('.switch input');



getSwitch.addEventListener('click', () => {
    if (getInput.classList.contains('dont-send')) {
        getInput.classList.add('send');
        getInput.classList.remove('dont-send')
    } else {
        getInput.classList.add('dont-send');
        getInput.classList.remove('send')
    }
    console.log(typeof Number(getInput))
})


