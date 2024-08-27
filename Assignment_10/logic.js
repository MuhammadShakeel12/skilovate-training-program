// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    display.value += value;
}

// Clear the display
document.getElementById('clear').addEventListener('click', () => {
    display.value = '';
});

// Backspace functionality (remove last character)
document.getElementById('backspace').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

// Add functionality to number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.value);
    });
});

// Add functionality to operator buttons
document.getElementById('dot').addEventListener('click', () => updateDisplay('.'));
document.getElementById('divide').addEventListener('click', () => updateDisplay('/'));
document.getElementById('multiply').addEventListener('click', () => updateDisplay('*'));
document.getElementById('subtract').addEventListener('click', () => updateDisplay('-'));
document.getElementById('add').addEventListener('click', () => updateDisplay('+'));

// Equals functionality to evaluate the expression
document.getElementById('equals').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
});
