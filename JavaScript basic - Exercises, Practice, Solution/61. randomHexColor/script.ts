// Write a JavaScript program to generate a random hexadecimal color code.
// Poor mans solution
function getRandomHexColor(): string {
  const letters = ["a", "b", "c", "d", "e", "f"];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let color = "#"

  function rnd() {
    const newArr = [...letters, ...nums];
    return newArr[Math.floor(Math.random() * newArr.length)];
  }
  for(let i = 0; i < 6; i++){
    color += rnd()
  }

  return color
}

console.log(getRandomHexColor());
console.log(getRandomHexColor());

// epic solution
const randomHexColor = (): string => {
    let color = (Math.random() * 0xfffff * 1000000).toString(16)
    return `#` + color.slice(0,6)
}

console.log(randomHexColor())
