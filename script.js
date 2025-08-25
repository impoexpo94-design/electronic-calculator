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
