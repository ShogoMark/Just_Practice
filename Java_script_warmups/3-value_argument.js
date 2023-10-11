#!/usr/bin/node

argv = process.argv

if (argv[2] === undefined) {
  console.log('no argument');
} else {
  console.log(argv[2]);
}
