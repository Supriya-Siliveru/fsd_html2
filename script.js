
window.alert("hii guys");

console.log("This is supriya");
console.log("Task-5 : Recreate the code of JS");

// single line comment
/* multi line 
comment*/

// Variables

let a=3;
let b=2;

console.log(a);  //3
console.log("b"); //b

// operators : Arithmatic operator:- +,-,*,%,/,**

console.log(a+b); //5 - addition

console.log(a-b); //1 - subtraction

console.log(a*b); //6 - multiplication

console.log(a%b); //1 modulo

console.log(a/b); //1.5 - division

console.log(a**b); //9 - exponential

// Assignment operators:- =,+=,-=,*=, /=, %=, **=

let c=2;
c+=5;
console.log(c); //c=c+5= 2+5 = 7

let d=4;
d-=3;
console.log(d); //d=d-3 = 4-3 =1

e=6;
e*=6;
console.log(e); //e=e*6 = 6*6 =36

d/=2;
console.log(d); //d= d/2 = 1/2 = 0.5

c%=3;
console.log(c); //c= c%3 = 7%3 = 1

e**=2;
console.log(e); //e= e**2 = 36*36 =1296

// comparision operators :- ==,===,!=,>,>,>=,<=

let num1 = 5;
let num2 = 7;

console.log(num1 != num2); //true

console.log(num1 > num2); //false

console.log(num1 < num2); //true

console.log(num1 <= num2); //true

console.log(num1 >= num2); //false

let Num1 = 3; // here 3 is a number or integer
let Num2 = "3"; // here 3 is a string

console.log(num1 == num2); //true 

console.log(num1 === num2); //false because the datatypes are not same though values are equal

/*Data types
string = Best, platform, careerx, js
number = 9,8
boolean = true,false*/

//string methods

let fname = "careerX";
let lname = "CLUB";

console.log(fname + lname); //careerXCLUB

console.log(fname +" "+ lname); // careerX CLUB

console.log(fname.length); //7

console.log(fname.toUpperCase()); //CAREERX

console.log(lname.toLowerCase()); //club

console.log(fname.indexOf("a")); //1



let str = "shivashakthipoint";
let part = str.substr(5);

console.log(part); //shakthipoint

let part5 = str.charAt(6);

console.log(part5);

let part6 = str.charCodeAt('p');
console.log(part6);

let part4 = str.slice(-5);

console.log(part4); //point

let part1 = str.replace("point","place");

console.log(part1); //shivashakthiplace

let text = "kerala is a beautiful place!";
let part2 = text.replace(/KERALA/i , "Tamilnadu"); //for case sensitive using regular with i

console.log(part2); // Tamilnadu is a beautiful place!

let part3 = text.split(" ");

console.log(part3); //5 kerala, is, a, beautiful, place!

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

console.log(text3); //joins two or more strings - Hello World

let Text1 = "     Kedhar Nath     ";
let Text2 = Text1.trim();

console.log(Text2); //Kedhar Nath

let Text3 = Text1.trimStart(); //Kedhar Nath    .
console.log(Text3);

let Text4 = Text1.trimEnd();
console.log(Text4); //      Kedhar Nath

let Number = '123456789';
let last3digits = Number.slice(-3); //789

let Maskednum = last3digits.padStart(Number.length,'*');

console.log(Maskednum); //******789

let Maskednum2 = last3digits.padEnd(Number.length,'*');

console.log(Maskednum2); //789******













