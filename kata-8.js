const multiplicationTable = function(maxValue) {
  //declare empty array to hold values
  let values=[];
  //declare empty string to print values into
  let arr = '';
  //iterate through loop maxValue times and push inital value to array
  for (let i = 1; i <= maxValue; i++) {
    // console.log(maxValue)
    values.push(i); 
  }

  //iterate through values array, multiplying current index value onto itself for length of values array
  for (let j = 1; j <= values.length; j++) {
    let result = values.map(x => x * j);
    let final = result.toString();
    final=final.split(",").join(" ");
    arr += final+"\n";
  }
  return(arr);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));