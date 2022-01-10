function getValues(values: number[]): any {
  let x = [];

  if (values.length <= 2) {
    return 0;
  } else {
    x = [values[0], values[2]];
    return x;
  }
}

console.log(getValues([0, 1, 2]));
console.log(getValues([0, 1]));
console.log(getValues([20, 20, 30]));
