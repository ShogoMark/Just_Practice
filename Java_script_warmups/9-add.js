#!/usr/bin/node

function add(a, b) {
  return a + b;
}

const int_one = parseInt(process.argv[2]);
const int_two = parseInt(process.argv[3]);

console.log(add(int_one, int_two));
