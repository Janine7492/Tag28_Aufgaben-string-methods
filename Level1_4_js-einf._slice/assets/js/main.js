const A = 'Susi is going to codingschool';

const first = A.slice(0, 4);
const second = A.slice(5, 7);
const third = A.slice(5, 16) + " " + A.slice(23);
const fourth = A.slice(23);
const fifth = first + " " + second + " " + A.slice(23);

document.write(first + "<br />");
document.write(second + "<br />");
document.write(third + "<br />");
document.write(fourth + "<br />");
document.write(fifth + "<br />");