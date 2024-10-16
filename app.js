const display = document.getElementById("display");
const listOfKeys = ['1', '2', '3', '4',
                    '5', '6', '7', '8',
                    '9', '0', '*', '-',
                    '+', '%', '(', ')',
                    '/', '.', 'Enter'];

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  if (event.key == 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
  if (listOfKeys.includes(event.key)) {
    if (event.key == 'Enter')
    {
      calculate();
    } else {
      display.value += event.key;
    }
  }
});