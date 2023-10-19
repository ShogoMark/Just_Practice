#!/usr/bin/node

const val = parseInt(process.argv[2]);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

if (!isNaN(val)) {
  console.log(factorial(val));
} else {
  console.log(1);
}
