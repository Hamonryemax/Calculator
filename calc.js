const calculator = {
    '+': (a, b) => {
        return result = a + b
    },
    '-': (a, b) => {
        return result = a - b
    },
    '*': (a, b) => {
        return result = a * b
    },
    '/': (a, b) => {
        return result = a / b
    },
};

const comma = document.getElementById('comma');
const percent = document.getElementById('percent');
const addMinus = document.getElementById('add-minus');
const buttonAC = document.getElementById('AC');
const scoreBoard = document.querySelector('.scoreboard');
const container = document.querySelector('.calculator');
let num1, num2, operator, result, commaTorF = false;

comma.addEventListener('click', getComma);
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
    if (num2 == undefined) {
        scoreBoard.innerHTML = '0';
        num1 = undefined;
        buttonAC.innerHTML = 'AC';
    } else {
        scoreBoard.innerHTML = '0';
        num2 = undefined;
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
        if (result !== undefined) {
            num1 = result;
            scoreBoard.innerHTML = ''
        }
        if (scoreBoard.innerHTML == 0) {
            scoreBoard.innerHTML = '';
        }
        if (num1 !== undefined) {
            if (num2 == undefined) {
                scoreBoard.innerHTML = '';
                const prevOperatorButton = document.querySelector(`[data-operation="${operator}"]`);
                prevOperatorButton.classList.add('non-highlight');
            }
            num2 = 0;
        }
        buttonAC.innerHTML = 'C';
        const { input } = target.dataset;
        scoreBoard.innerHTML += input;
    }
    if (target.dataset.hasOwnProperty('operation')) {
        commaTorF = false;
        const { operation } = target.dataset;
        if (operator !== undefined) {
            const prevOperatorButton = document.querySelector(`[data-operation="${operator}"]`);
            prevOperatorButton.classList.add('non-highlight');
        }
        num1 = scoreBoard.innerHTML;
        operator = operation;
        target.classList.add('highlight');
    }
    if (target.dataset.hasOwnProperty('calculate')) {
        commaTorF = false;
        if (result !== undefined) {
            result = calculator[operator](result, num2);
            scoreBoard.innerHTML = result;
            return;
        }
        const prevOperatorButton = document.querySelector(`[data-operation="${operator}"]`);
        prevOperatorButton.classList.remove('non-highlight');
        prevOperatorButton.classList.remove('highlight');
        num2 = 0;
        num2 = scoreBoard.innerHTML;
        num1 = num1 * 1;
        num2 = num2 * 1;
        result = calculator[operator](num1, num2);
        scoreBoard.innerHTML = result;
    }
}

function getComma() {
    if (commaTorF == false) {
        scoreBoard.innerHTML += '.';
        commaTorF = true;
    }
}