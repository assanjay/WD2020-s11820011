//console.log ("Hello World");

//array
/*let names = ["John", "Mark", "Jane"];
let years = new Array(1991, 1992, 1993);

console.log (names);
console.log (length,names);
console.log (years);

console.log (names[1]);
console.log (years[years,length = 1]);

names[1] = 'bob';
console.log(names);

let john = ["John", "Smith", 32, true];
console.log(john.toString());
console.log(john.join('4'));

john.pop();
john.shift();
console.log(john);

john.push(true);
john.push("blue");
console.log(john);
john.unshift("john");
console.log(john); */

//object
/* let john = {
    firstName :'John',
    lastName : 'Smith',
    birthYear : 1990,
    isMarried : true,
    family : ["Jane","Mark", "Bob"],
    calAge: function() {
        this.age = 2020 - this.birthYear;
    },
};
console.log(john);
console.log(john.birthYear)
console.log(john.birthYear);
console.log(john["lastName"]);

john.job="driver";
console.log(john);
john.calAge();

delete john.job;
console.log(john.family[1]);
*/

//javascript dom

let title = document.getElementsByTagName ('h1');
console.log(title); 

let username = document.getElementById("username").value;
console.log(username);

let username2 = document.getElementsByClassName ("input-user").value;
console.log(username2);

function helloworld(){
    alert("helloworld");
}
function getusername(){
    document.getElementById(username).value
    console,log (username);
    document.getElementsByTagName('p')[0].innerHTML= username;

}

function changePicture(){
    let image = document.getElementById('cat-image');
    console.log(image)
}