export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export function sum(a, b) {
  return a + b;
}

export function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string.charAt(i);
  }
  return reverse;
}
