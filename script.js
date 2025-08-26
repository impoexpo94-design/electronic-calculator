// Append to display
function appendValue(value) {
  document.getElementById("result").value += value;
}

// Clear all
function clearResult() {
  document.getElementById("result").value = "";
}

// Backspace
function deleteChar() {
  const el = document.getElementById("result");
  el.value = el.value.slice(0, -1);
}

// Evaluate helper with safety + caret support
function evaluateExpression(expr) {
  // Allow only safe characters
  const safe = /^[0-9+\-*/().^ \t]+$/.test(expr);
  if (!safe) throw new Error("Invalid");

  // Convert ^ to ** for JS
  const normalized = expr.replace(/\^/g, "**");
  // Evaluate
  // eslint-disable-next-line no-eval
  const result = eval(normalized);
  if (typeof result !== "number" || !isFinite(result)) throw new Error("Invalid");
  return result;
}

// =
function calculateResult() {
  try {
    const el = document.getElementById("result");
    const expression = el.value.trim();
    if (!expression) return;
    const result = evaluateExpression(expression);
    el.value = result;
  } catch {
    document.getElementById("result").value = "Error";
  }
}

// √ on current expression/value
function squareRoot() {
  try {
    const el = document.getElementById("result");
    const expression = el.value.trim();
    if (!expression) return;
    const value = evaluateExpression(expression);
    if (value < 0) throw new Error("Invalid"); // no real sqrt for negatives
    el.value = Math.sqrt(value);
  } catch {
    document.getElementById("result").value = "Error";
  }
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (/^[0-9()]$/.test(key)) {
    appendValue(key);
  } else if ("+-*/.^".includes(key)) {
    appendValue(key);
    e.preventDefault(); // prevent browser find dialog on "/"
  } else if (key === "Enter" || key === "=") {
    calculateResult();
    e.preventDefault();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key === "Escape") {
    clearResult();
  } else if (key === ",") {
    // Some keyboards use comma for decimal - convert to dot
    appendValue(".");
    e.preventDefault();
  }
});
