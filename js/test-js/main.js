export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string.charAt(i);
  }
  return reverse;
}

function sum(a, b) {
  return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
  return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
  return Math.round(a * b * 100) / 100;
}

function divide(a, b) {
  return Math.round((a / b) * 100) / 100;
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return;
  }

  let avg = 0;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  avg = avg / arr.length;

  return { average: avg, min: min, max: max, length: arr.length };
}

function transformCaesar(char, key) {
  let code = char.charCodeAt(0) + key;
  if (code === 91) {
    code = 65;
  }

  return String.fromCharCode(code);
}

export function caesarCipher(string, key) {
  let secret = "";
  for (let i = 0; i < string.length; i++) {
    secret += transformCaesar(string.charAt(i), key);
  }
  return secret;
}

export { sum, subtract, multiply, divide };
