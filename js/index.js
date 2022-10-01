





































// Budget Calculate 

function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseInt(inputValueString);
    // clear the value
    input.value = '';
    return inputValue
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

function setValue(elementId, newValue) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
}

const havePlayer = 5;

document.getElementById('calculate-btn').addEventListener('click', function () {
    const inputValue = getInputValueById('player-rent');
    if (isNaN(inputValue)) {
        alert('Please type valid number');
    }
    else if (inputValue < 0) {
        alert('Please type positive number');
    }

    else {
        const playerTotalExpense = inputValue * havePlayer;
        console.log(playerTotalExpense);
        setValue('player-expenses', playerTotalExpense);
    }
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getInputValueById('manager-cost');
    console.log(managerCost);
    const coachCost = getInputValueById('coach-cost');
    console.log(coachCost);
    const playerTotalCost = getElementValueById('player-expenses');
    console.log(playerTotalCost);
    const calculateTotalCost = managerCost + coachCost + playerTotalCost;
    setValue('calculate-total-cost', calculateTotalCost);
})