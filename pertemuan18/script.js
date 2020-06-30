// console.log ("Hello world from external");

//let first_Name = "John";
//const $number = 3.1;
//let years = 23;
//let isMarried = true;


// console.log (first_Name);
//console.log ($number)
//console.log (years)
//console.log (isMarried)

//operator arikmatika
//let num1 = 10;
//let num2 = 2;

//console.log (num1 + num2);
/* console.log (num1 - num2);
console.log (num1 * num2);
console.log (num1 / num2);
console.log (num1 % num2);
console.log (num1 ** num2);
num1++;
console.log (num1);
num--;
console.log (num1);

//assignment operator
num4 = num3;
console.log (num4)

let num3=10
let num4

num3 **= 2;
console.log (num3)

//string operator

let firstName ="John";
let lastName ="Doe";
let age =25;

console.log (firstName + " "+ lastName);
console.log (firstName + age); */

// operator perbandingan
/* let num1 = 10;

console.log (num1 ==10);
console.log (num1 == "10");

console.log (num1 === 10);
console.log (num1 === "10");

console.log (num >= 10);
console.log (num <= 10);

let num2 = num1 === 10 ? "Ten" : "Another Number";
console.log(num2); */
//operator logic
//let hasCertificate = true;
//let hasTranscript = false;

//console.log (hasCertificate || hasTranscript);
//console.log (!hasCertificate);

//operator presedence
//let result = (10 + 2) * 3;
//console.log(result)

var markMass; var markHeight; var johnMass; var johnHeight; var markBMI; var johnBMI;
markMass = prompt('What is Mark\'s Mass?' );
markHeight = prompt('What is Mark\'s Height?' );
johnMass = prompt('What is John\'s Mass?' );
johnHeight = prompt('What is John\'s Height?' );

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var markBiggerBMI   = markBMI > johnBMI;

console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
  console.log('Mark\'s BMI is higher than John? True\'s');
}
else {
  console.log('Mark\'s BMI is bigger than John ? False\'s');
}