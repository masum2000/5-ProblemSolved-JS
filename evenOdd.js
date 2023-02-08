// Here i called a function which name is evenOdd. inside of this function i find out the total character of a string and the amount of the length is even or odd it will be return as a output.
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