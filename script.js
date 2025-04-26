const display = document.getElementById('display');

function appendDisplay(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function deleteLast() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = '0';
  }
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = 'Error';
  }
}