for (let i = 1; i <= 100; i++) {
    //controlliamo se il numero è divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    //controlliamo se il numero è divisibile per 3
    else if (i % 3 === 0) { 
        console.log("Fizz");
    } 
    //controlliamo se il numero è divisibile per 5
     else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    };
}