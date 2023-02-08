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