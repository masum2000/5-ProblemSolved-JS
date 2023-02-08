// Here i called a function which name is mindGame .inside of this function i calculate some mathematical term like multiplication,Addition, Division and Subtraction and finally i return the subtraction value.
function mindGame(number){
    if(typeof number !== "number"){
    return "Please input should be a number!"
    }
    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;
    return subtraction;
    }
    const inputNum = 33;
    const resultNumber = mindGame(inputNum);
    console.log(resultNumber);