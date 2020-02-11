let talkingCalendar = function(date) {
  // Your code here
  let message = "";
  let Month = [
    null,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let words = date.split("/");
  let monthNum = parseInt(words[1]);
  message += `${Month[monthNum]} `;

  if (words[2][0] === "1") {
    message += `${parseInt(words[2])}th, `;
  } else if (words[2][1] === "1") {
    message += `${parseInt(words[2])}st, `;
  } else if (words[2][1] === "2") {
    message += `${parseInt(words[2])}nd, `;
  } else if (words[2][1] === "3") {
    message += `${parseInt(words[2])}rd, `;
  } else {
    message += `${parseInt(words[2])}th `;
  }
  message += words[0];

  return message;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
