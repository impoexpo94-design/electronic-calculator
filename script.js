// script.js
function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteChar() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch {
    document.getElementById("result").value = "Error";
  }
}
