const text = 'Susi is back from codingschool';

const first = text.substring(0, 4);
const second = text.substring(5, 7);
const third = text.slice(24);
const fourth = first + " " + second + " " + text.slice(24);

document.write(first + "<br />");
document.write(second + "<br />");
document.write(third + "<br />");
document.write(fourth + "<br />");
