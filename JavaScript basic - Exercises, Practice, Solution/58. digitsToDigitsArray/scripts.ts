function digitsConverter(arr) {
  let x = [];
  let value = JSON.stringify(arr);
  console.log(value.length);

  for (let i = 0; i < value.length; i++) {
    console.log(value[i]);
    x.push(parseInt(value[i]));
  }
  return x;
}

console.log(digitsConverter(123));

// IES 6 solution!
let x = [123]
const digit = x => [...`${x}`].map(item => parseInt(item))

console.log(digit(1234))