// inside of isLGSeven function i calculate the difference value between input number and 7. then multiply input number with 2. if the difference vale is less than 7 then i return the difference value otherwise i return the multiplication value.
function isLGSeven(number){
    if(typeof number !== "number"){
    return "Please enter a number !"
    }
    const result = number - 7 ;
    const result2 = number * 2 ;
    if(result < 7){
    return result;
    }
    else (
    result2
    )
    return result2;
    }
    const inputNumber = 15;
    const finalResult = isLGSeven(inputNumber);
    console.log(finalResult);