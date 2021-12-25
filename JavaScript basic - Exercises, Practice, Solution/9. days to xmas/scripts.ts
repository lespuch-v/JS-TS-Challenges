const endDate: any = new Date(2022, 11, 24);
const startDate: any = new Date(2021, 11, 24);

function getDifference(num1: number, num2: number): number {
  const diff = Math.abs(num1 - num2);
  return diff / (1000 * 60 * 60 * 24);
}

console.log(getDifference(endDate, startDate));
