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

const percent = document.getElementById('percent');
const addMinus = document.getElementById('add-minus');
const buttonAC = document.getElementById('AC');
const scoreBoard = document.querySelector('.scoreboard');
const container = document.querySelector('.calculator');
let num1, num2, operator;

container.addEventListener('click', handleContainerClick);
buttonAC.addEventListener('click', reset);
addMinus.addEventListener('click', addMinusForNumber);
percent.addEventListener('click', getPercent);

function getPercent() {
    scoreBoard.innerHTML = scoreBoard.innerHTML / 100;
}

function addMinusForNumber() {
    scoreBoard.innerHTML = scoreBoard.innerHTML * (-1);
}

function reset() {
    if (num2 === 0x) {
        scoreBoard.innerHTML = '0';
        num1 = 0;
        buttonAC.innerHTML = 'AC';
    } else {
        scoreBoard.innerHTML = '0';
        num2 = 0;
        buttonAC.innerHTML = 'AC';
        if (operator !== undefined) {
            const prevOperatorButton = document.querySelector(`[data-operation="${operator}"]`);
            prevOperatorButton.classList.remove('highlight');
        }
    }
}


function handleContainerClick(e) {
    const { target } = e;
    if (target.dataset.hasOwnProperty('input')) {
        if (scoreBoard.innerHTML == 0) {
            scoreBoard.innerHTML = '';
        }
        buttonAC.innerHTML = 'C';
        const { input } = target.dataset;
        scoreBoard.innerHTML += input;
    }
    if (target.dataset.hasOwnProperty('operation')) {
        const { operation } = target.dataset;
        if (operator !== undefined) {
            const prevOperatorButton = document.querySelector(`[data-operation="${operator}"]`);
            prevOperatorButton.classList.remove('highlight');
        }
        num1 = scoreBoard.innerHTML;
        operator = operation;
        target.classList.add('highlight');
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
