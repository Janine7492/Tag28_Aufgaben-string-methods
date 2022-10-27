const text = `Sam is good at codingschool`;

const first = text.replace("good", "bad").replace("codingschool", "school");

const second = text.replace("Sam", "Susi").replace("codingschool", "school");

const third = text.replace("codingschool", "tennis");

document.write(first + "<br />");
document.write(second + "<br />");
document.write(third + "<br />");