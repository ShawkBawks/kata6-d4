let repeatNumbers = function(data) {
  let numberTotal = [];//empty array
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];
    //temp[0] is the element that we want to repeat
    //temp[1] is the element that is the number of times we want to repeat
    for (let n = 1; n <= temp[1]; n++) {
      numberTotal.push(temp[0]);
    }
    numberTotal.push(' ');
  }
  numberTotal.pop();
  return numberTotal.join('');
    
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


