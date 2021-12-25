function firstDay(): string[]{
    const dayArr: string[] = []
    let text = ""

    for(let year = 2014; year <= 2050; year++){
        let d = new Date(year,0,0)
        if(d.getDay() === 0){
            text = `1st Januare is being a Sunday ${year}`
            dayArr.push(text)
        }
    }



    return dayArr
}


// Expected Result
// --------------------
// 1st January is being a Sunday  2017
// 1st January is being a Sunday  2023
// 1st January is being a Sunday  2034
// 1st January is being a Sunday  2040
// 1st January is being a Sunday  2045
// --------------------

console.log(firstDay());
