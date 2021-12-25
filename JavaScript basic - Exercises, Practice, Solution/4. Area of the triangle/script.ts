function areaOfTriangle(a: number, b: number, c:number): number{
    const s = (a + b + c) / 2
    return Math.floor(Math.sqrt(s*((s-a)*(s-b)*(s-c))))
}

console.log(areaOfTriangle(5,6,7))


