function leapYear(num: number): string{
    if(num %4 == 0){
        if(num %100 == 0){
            if(num %2 == 400){
                return "its a leap year"
            }else{
                return "its a leap year"
            }
        }else{
            return "its a leap year"
        }
    }else{
        return "not a leap year"
    }
}

console.log(leapYear(2012))

// STEP 1 If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// STEP 2 If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// STEP 3 If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// STEP 4 The year is a leap year (it has 366 days).
// STEP 5 The year is not a leap year (it has 365 days).
