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




// Here i called a  function which name is evenOdd. inside of this function  i find out the total character of a string and the amount of the length is even or odd it will be return as a output.

function evenOdd(sampleString){
    
    if(typeof sampleString !== "string"){
        return "Please enter a string as a input!"
    }
    
    if (sampleString.length % 2 === 0) {
        return "even";
    } 
    else {
        return "odd";
    }
}
 const sampleInput = "ma" ;
 const finalOutput = evenOdd(sampleInput);
 console.log(finalOutput);





 // inside of isLGSeven function i calculate the difference value between  input number and 7. then multiply input number with 2. if the difference vale is less than 7 then i return the difference value otherwise i return the multiplication value.

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





 // here i called a function which name is findingBadData. inside of this function i find out the total negative value of an array and i finally return total amount of negative value as a output.  

function findingBadData(sampleArray) {
       
    if (typeof sampleArray !== "object" ) {
      return "Must should be an array"
    }

    let count = 0;
    for (let i = 0; i < sampleArray.length; i++) {
      if (sampleArray[i] < 0) {
        count++;
      }
    }
    return count;
  }
  const inputArray =[ -4, -9, -5, -33, -55, 100 ];
  const totalNumber = findingBadData(inputArray);
  console.log(totalNumber);






  // Here i called a function a which name is gemsToDiamond. inside of this function i multiply 3 different input value with 21,32 and 43.then i addition total value. then i subtract 2000 from total value.if total value is grater than 2000 then it will be return the new result other wise it will be return the total value.

function gemsToDiamond(num1,num2,num3){

    if(
        typeof num1 !== "number" || typeof num2 !== "number" || typeof num3!== "number"){
        return "Please enter all valid number !"
    }

     const firstFriendGems = num1*21 ;
     const secondFriendGems = num2*32 ;
     const thirdFriendGems = num3*43 ;
     const totalDiamond = firstFriendGems + secondFriendGems + thirdFriendGems; 
     const newTotalDiamond = totalDiamond - 2000;

     if(totalDiamond >= (1000*2)){
          return newTotalDiamond;
     }
     else{
        return totalDiamond;
     }
      
}
const friend1= 100;
const friend2= 5;
const friend3 = 1;
const totalResult = gemsToDiamond(friend1,friend2,friend3);
console.log(totalResult);