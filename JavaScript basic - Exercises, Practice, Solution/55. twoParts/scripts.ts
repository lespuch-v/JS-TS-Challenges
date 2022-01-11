function getTwoNumbers(value: number[]): number[] {
  const arr1 = [];
  const arr2 = [];
  let value1 = 0;
  let value2 = 0;

 
  for (let i = 0; i < value.length; i++) {
      if (i % 2 == 0) {
      arr1.push(value[i]);
    } else {
      arr2.push(value[i]);
    }
  }

  arr1.forEach((item) => {
    value1 += item;
  });
  arr2.forEach((item) => {
    value2 += item;
  });
  console.log(arr1);
  console.log(arr2);

  return [value1, value2];
}

console.log(getTwoNumbers([0,1,2,3,4,5,6]))
console.log(getTwoNumbers([1, 3, 6, 2, 5, 10]));
