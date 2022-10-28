class Calcul {

    constructor() {
        this.summ()
    }

    summ() {
        const plus = document.querySelector('.plus')
        const res = document.querySelector('.res')
        const min = document.querySelector('.minus')
        const odin = document.querySelector('.odin')
        const dva = document.querySelector('.dva')
        const ravno = document.querySelector('.ravno')
        plus.addEventListener('click', () => {
            res.innerHTML += '+'
        })
        min.addEventListener('click', () => {
            res.innerHTML += '-'
        })
        odin.addEventListener('click', () => {
            res.innerHTML += 1
        })
        dva.addEventListener('click', () => {
            res.innerHTML += 2
        })
        ravno.addEventListener('click', () => {
            const result = document.querySelector('.res').textContent.split('')
            let kon = 0;
            for (let i = 0; i < result.length; i++) {
                if (result[i] === '+') {
                    kon += +result[i - 1] + +result[i + 1]
                }
                if (result[i] === '-') {
                    kon = +result[i - 1] - +result[i + 1]
                }
                if (result[i] === '/') {
                    kon = +result[i - 1] / +result[i + 1]
                }
                if (result[i] === '*') {
                    kon = +result[i - 1] * +result[i + 1]
                }

            }
            res.innerHTML = kon
        })

    }



}

const calcul = new Calcul()