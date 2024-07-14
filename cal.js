function clearDisplay() {
    document.getElementById('display').innerText = '';
    document.getElementById('cal').innerText = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.innerText.slice(-1);
    
    // Check if the last character is an operator
    const operators = ['+', '-', '*', '/'];

    // Prevent appending multiple operators in a row
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    // Prevent appending an operator at the start
    if (display.innerText === '' && operators.includes(value)) {
        return;
    }

    display.innerText += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    const cal = document.getElementById('cal');
    try {
        const result = eval(display.innerText);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        cal.innerText = result;
    } catch {
        cal.innerText = 'Error';
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}
