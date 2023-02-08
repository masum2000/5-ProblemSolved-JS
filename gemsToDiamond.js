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