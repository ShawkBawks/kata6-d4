
  const urlEncode = function(text) {
    let newString = "";
    let percent = "20%";
    for (let i = 0; i < text.length; i++){
      if (text[i] === " ") {
        newString += percent;
      }else {
        newString += text[i];
      }
    }
    for (let o = 0; o < text.length; o++) {
      if ((text.charAt(0) || text.length() - 1) === " ") {
        let withoutSpaces = newString.slice(3);
        return withoutSpaces.slice(0, -3);
      } else {
        return newString;
      }
    }
  };


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

