const text = `Sam is going to codingschool`;

const text2 = text.replace("codingschool", "school");

const first = text2.toUpperCase();
// Alternative ohne neue text Variable:
const first2 = text.slice(0, -12).concat(text.slice(-6)).toUpperCase();


const second = text2.toLowerCase();

const school = text2.slice(16);
const sam = text2.slice(0, 3)
const middle = text2.slice(3, 16);
const third = sam.toUpperCase() + middle.toLowerCase() + school.toUpperCase();
const fourth = sam.toLowerCase() + middle.toUpperCase() + school.toLowerCase();
const fifth = text2[0].toUpperCase() + text2.substring(1, 4) + text2[4].toUpperCase() + text2.substring(5, 7) + text2[7].toUpperCase() + text2.substring(8, 13) + text2[13].toUpperCase() + text2.substring(14, 16) + text2[16].toUpperCase() + text2.substring(17);

document.write(first + "<br />");
document.write(second + "<br />");
document.write(third + "<br />");
document.write(fourth + "<br />");
document.write(fifth + "<br />");
document.write(first2 + "<br />");