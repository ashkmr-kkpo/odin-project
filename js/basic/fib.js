function fib(num) {
  if (num === 0) return 0;

  let fib = 1;
  let prev = 0;
  while (num > 2) {
    let temp = fib;
    fib = fib + prev;
    prev = temp;
    num--;
  }
  return fib;
}

function recursefib(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return recursefib(num - 1) + recursefib(num - 2);
}
console.log(fib(7));
console.log(recursefib(7));
