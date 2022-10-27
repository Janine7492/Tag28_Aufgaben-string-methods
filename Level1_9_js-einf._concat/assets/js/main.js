const text1 = `Sam is going to codingschool`;
const text2 = `Susi`;
const text3 = `programming bike`;
const text4 = `and`;

const text1Neu = text1.replace("codingschool", "school");

const first = text1.replace("codingschool", "school and to the movie theater");

const sec = first.substring(0, 15) + first.substring(33);

const three = text2 + " " + text4 + " " + text1Neu.replace("is", "are");

const four = text2 + " " + text4 + " " + text1Neu.replace("is", "are").replace("school", "gym ") + text4 + " to " + text3.replace("programming bike", "the movie theater");

const five = first.replace("Sam", "Susi");

console.log(first);
console.log(sec);
console.log(three);
console.log(four);
console.log(five);

document.write(first + "<br />");
document.write(sec + "<br />");
document.write(three + "<br />");
document.write(four + "<br />");
document.write(five + "<br />");
