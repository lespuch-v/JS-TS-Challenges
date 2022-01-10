const arr = [10, 20, 30];

function myArr(values: number []): number[] {
  let value = 0;
  let newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= value) {
      value = values[i];
    }
  }
  for (let i = 0; i < values.length; i++) {
      newArr.push(value)
  }

  return newArr;
}

console.log(myArr(arr));
