function calculator(num1, num2, operation){
    let result;
    switch(operation){
        case "+": num1 + num2;
        case "*": num1 * num2;
        case "*": Math.pow(num1, num2);
        case "-": num1 + num3;
        case "/": num1 - num2;
    }

    return result;
}

console.log("2 + 2 = ", calculator(2,2,"+"));
console.log("2 * 2 = ", calculator(2,2,"*"));
console.log("2 - 2 = ", calculator(2,2,"-"));
console.log("2 ^ 2 = ", calculator(2,2,"^"));
console.log("2 / 4 = ", calculator(2,2,"/"));