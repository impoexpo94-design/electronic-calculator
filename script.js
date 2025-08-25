function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function clearEntry() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.split(/[\+\-\*\/]/).slice(0, -1).join('');
}

function deleteChar() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = document.getElementById("result").value;
    let result = eval(expression);
    document.getElementById("result").value = result;
  } catch {
    document.getElementById("result").value = "Error";
  }
}



// 🌙 Toggle Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

function squareRoot() {
  try {
    let current = document.getElementById("result").value;
    if (current) {
      let result = Math.sqrt(eval(current));
      document.getElementById("result").value = result;
    }
  } catch {
    document.getElementById("result").value = "Error";
  }
}

function power() {
  let current = document.getElementById("result").value;

  if (current) {
    // Ask user for the exponent
    let exponent = prompt("Enter exponent value:");
    if (exponent !== null && exponent !== "") {
      try {
        let result = Math.pow(eval(current), eval(exponent));
        document.getElementById("result").value = result;
      } catch {
        document.getElementById("result").value = "Error";
      }
    }
  }
}



// ⌨️ Keyboard Support
document.addEventListener("keydown", function(event) {
  let key = event.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key === "Escape") {
    clearResult();
  } else if (key === ".") {
    appendValue(".");
  }
});




