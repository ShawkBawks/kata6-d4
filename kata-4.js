const instructorWithLongestName = function(instructors) {
  let mentor = "";
  let object;
  let index;

  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name;
    if (mentor.length < nameLength.length) {
      mentor = nameLength;
      index = mentor.indexOf(mentor[i]);
      object = instructors[index];
    }
  }return object;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
