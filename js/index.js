// display Player
function displayPlayer(players) {
    const playerList = document.getElementById('player-name-lists');
    playerList.innerHTML = '';
    for (const player of players) {
        const playerName = player.playerName
        const li = document.createElement('li');
        li.innerText = playerName;
        playerList.appendChild(li);
    }
}

const playerArray = [];
function addToPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);
    displayPlayer(playerArray);
}


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
        setValue('player-expenses', playerTotalExpense);
    }
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    const playerTotalCost = getElementValueById('player-expenses');
    if (isNaN(managerCost && coachCost)) {
        alert('Please type valid number');
    }
    else if (managerCost < 0 && coachCost < 0) {

    }
    else {
        const calculateTotalCost = managerCost + coachCost + playerTotalCost;
        setValue('calculate-total-cost', calculateTotalCost);
    }
})