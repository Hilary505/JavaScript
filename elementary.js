function multiply(a, b) {
  let result = 0;
  const isNegative = b < 0; // Check if b is negative
  b = Math.abs(b); // Work with the absolute value of b

  for (let i = 0; i < b; i++) {
    result += a;
  }

  return isNegative ? -result : result; // Return negative result if b was negative
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  let result = 0;
  const isNegative = (a < 0) !== (b < 0); // Result is negative if signs of a and b are different
  a = Math.abs(a);
  b = Math.abs(b);

  while (a >= b) {
    a -= b;
    result++;
  }

  return isNegative ? -result : result;
}
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }

  // Use let instead of const so we can modify these variables
  let positiveA = Math.abs(a);
  const positiveB = Math.abs(b);

  // Perform the modulo operation using positive values
  while (positiveA >= positiveB) {
    positiveA -= positiveB;
  }

  // If `a` is negative, we return the negative result
  return a < 0 ? -positiveA : positiveA;
}


