const calculator = {
    '+': (a, b) => {
        let result = a + b
        return result;
    },
    '-': (a, b) => {
        let result = a - b
        return result;
    },
    '*': (a, b) => {
        let result = a * b
        return result;
    },
    '/': (a, b) => {
        let result = a / b
        return result;
    },
};


const scoreBoard = document.querySelector('.scoreboard');
const container = document.querySelector('.calculator');
let num1, num2, operator;


container.addEventListener('click', handleContainerClick);


function handleContainerClick(e) {
    const { target } = e;
    if (target.dataset.hasOwnProperty('input')) {
        const { input } = target.dataset;
        scoreBoard.innerHTML += input;
    }
    if (target.dataset.hasOwnProperty('operation')) {
        const { operation } = target.dataset;
        if (operator !== undefined) {
            const prevOperatorButton = document.querySelector(`[data-operation="${operator}"]`);
            prevOperatorButton.classList.remove("green");
        }
        num1 = scoreBoard.innerHTML;
        operator = operation;
        target.classList.add('green');
        scoreBoard.innerHTML = '';
    }
    if (target.dataset.hasOwnProperty('calculate')) {
        num2 = scoreBoard.innerHTML;
        num1 = num1 * 1;
        num2 = num2 * 1;
        const result = calculator[operator](num1, num2);
        scoreBoard.innerHTML = result;
    }
}
