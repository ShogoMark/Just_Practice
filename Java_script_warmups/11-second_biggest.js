#!/usr/bin/node

if (process.argv.length === 2 || process.argv.length === 3) {
  console.log(0);
} else {
  let biggest = -Infinity;
  let secondBiggest = -Infinity;
  
  for (let i = 2; i < process.argv.length; i++) {
    if (parseInt(process.argv[i]) > biggest) {
      secondBiggest = biggest;
      biggest = process.argv[i];
    } else if (process.argv[i] > secondBiggest && process.argv[i] !== biggest) {
      secondBiggest = process.argv[i];
    }
  }

  if (secondBiggest === -Infinity) {
    console.log(0);
  } else {
    console.log(secondBiggest);
  }
}
