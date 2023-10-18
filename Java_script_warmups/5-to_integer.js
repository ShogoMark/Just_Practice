#!/usr/bin/node

argv = process.argv

const int_argv =  Number(argv[2]);
if (isNaN(int_argv)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${int_argv}`);
}
