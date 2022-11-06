const calc = document.querySelector('.calc');
const result = document.querySelector('#result')
const history = document.querySelector('#history')
calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc-btn')) return;
    const value = event.target.innerText;

    switch (value) {

        case 'cos':
            result.innerText = `${Math.cos(result.innerText)}`
            break;

        case '♥':
            result.innerText = 'Калькулятор признается тебе в любви'
            break;

        case 'sin':
            result.innerText = `${Math.sin(result.innerText)}`
            break;

        case 'корень':
            result.innerText = `${Math.sqrt(result.innerText)}`
            break;

        case 'C':
            result.innerText = ''
            break;

        case '=':
            result.innerText = eval(result.innerText)
            break;
        case 'tng':
            result.innerText = `${Math.tan(result.innerText)}`
            break;

        default:
            result.innerText += value
    }
});
