//First approach: make use of function
// let firstName = prompt("Please enter your name: ");
// let surname = prompt("Please enter your surname: ");
// let salary = prompt("Please enter your salary: ",0);
// document.write(`Name: ${firstName}<br>Surname: ${surname}<br> Salary: R${eval(`${salary}*2`)}`);

// function addition() {
//     return 9 + 2;
// }

// document.write(`Sum: ${addition()}`);

// let addition = ()=>{
//     document.write(8 + 4);
// }

// addition();
//Array
// let students = [
//     'Gift', 'Asandile',
//     'Deno', 'Javier',
//     'Sakhe', 'Mkhuseli',
//     'John', 'Thando', 'Gift'
// ];
// let size = students.length;
// console.log(students);
// console.log(students[parseInt((size - 1)/2)])
// console.log(students);
// console.log(students[0]);
// //last element
// console.log(students[size-2]);
// //Second last element
// console.log(students[size-2]);

//Comparison operators
// let numb1 = 6;
// let numb2 = "6";
//console.log(numb1 < numb2);
//console.log(numb1 <= numb2);
//console.log(numb1 > numb2);
//console.log(numb1 != numb2);
//console.log(numb1 == numb2);
//console.log(numb1 === numb2);
// let salary = parseFloat(prompt("Enter your salary: "));
// let age = parseFloat(prompt("Enter your age: "));
// let qualified = (salary) >= 5000 && (age > 17);
// let qualified = !(salary) >= 5000 || (age > 17);
// document.write(qualified);

//Relational operator: in 
//let numbers =  [9,7,4,3,15];
// console.log(7 in numbers);

//Increment and decrement
// let numb1 = 8;
// console.log(numb1--);
// //numb1++;
// console.log(numb1);

//Ternary operator
//? :
// let age = 18;
// console.log(
//     age >17 ? "You are qualified" :
//     "You are not qualified");

// let firstName = prompt("Enter your name: ");
// let salary = parseFloat(prompt("Enter your salary: "));

// document.write(firstName);
// document.write(
//     salary >5000 ? 5000 + 1000 :
//     5000
// );

//Membership operator
// let person = {
//     name: 'User name',
//     surname: 'User surname'
// }
// let search = 'age'
// console.log(search in person);
// let numb1 = 12;
// if(numb1 > 13) {
//     document.write("Great than 13");
// }else {
//     document.write("less than 15")
// }
// function isNumber(onlyNumber) {
//     if(Number.isFinite(onlyNumber)) {
//         document.write(`${onlyNumber} is a number`);
//     }else {
//         document.write(`${onlyNumber} is not a number`);
//     }
// }
// //Calling a function
// let myNumber = "23";
// isNumber(myNumber);

// function isNumber(onlyNumber, notNumber) {
//     if((Number.isFinite(onlyNumber)) &&
//     (Number.isFinite(notNumber))) {
//         document.write(`${onlyNumber + notNumber} is a number`)
//     }else {
//         document.write(`${onlyNumber +notNumber} is not number`);
//     }
// }
// let numb1 = parseInt(prompt("Enter Number"))
// let numb2 = parseInt(prompt("Enter number"))

// isNumber(numb1,numb2)

// function addition(numb1, numb2) {
//     if((Number.isFinite(numb1)) &&
//     (Number.isFinite(numb2)) ) return numb1 + numb2;
//     return `${numb1} / ${numb2} is not a number`;
// }
// console.log(addition(8, 7)); 

// if((age > 17) && (salary >= 5000)) {
//     document.write("You are qualified");
// }else {
//     document.write("You are not qualified");
// }

//Switch statement
// let marks = 49;
// switch(marks) {
//     case 100:
//     case 95:
//         document.write("Grade A");
//     break;
//     case 91:
//     case 90:
//     case 87:
//         document.write("Grade B");
//     break;
//     case 50:
//         document.write("Passed");
//     break;
//     case 49:
//         document.write("Failed");
//     break;
//     default:
//         document.write("Not found");
// }

// let marks = 74;
// switch(true) {
//     case (marks < 49):
//         document.write("failed");
//         break;

//     case (marks >= 50) && (marks <= 69):
//         document.write("Passed");
//         break;

//     case (marks >= 70) && (marks <= 90):
//         document.write("Distinction");
//         break;

//     case (marks >= 50) && (marks <= 69):
//         document.write("You're awesome");
//         break;       
// }

/*
Different loop in JS:
- for
- for in: Loop through object's properties
- for of: Loop through the values 
- while
- do while
*/
// for(let i = 0; i<10; i+=1) {
//     console.log(i);
//     // if(i == 5) break;
//     //if(i == 4)continue;
// }

//for in
// let person = {
//     name: 'David',
//     subject: ['HTML5', 'CSS3'],
//     surname: 'John',
//     address: {
//         streetName: 'pretoria rd',
//         country: 'South Africa',
//         complexName: 'PTA',
//     }
// }
// console.log(
//     `
//     Name: ${person.name}
//     Surname: ${person.surname}
//     Street name: ${person.address.streetName}
//     `
// );

//console.log(person['name']);
// for(let data in person) {
//     if(data != 'address')
//     console.log(`${data}: ${person[data]}`);
// }
// console.log(person.address)

//for of
//let numbers = [9,7,4, 34, 8]
// for(let number of numbers) {
//     console.log(number);
// }

// for(let i =0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }
// function evenData(data) {
//     for(let i in data) {
//         if(i%2 ==0)
//         console.log(data[i]);
//     }
// }
// let data = [8, 9, 4, 12, 'Joel'];
// evenData(data);

//Factory function
// function userDetails(firstName, surname) {
//     return {
//         firstName: firstName,
//         surname: surname,
//         display: function () {
//             console.log(`Name: ${firstName}\nSurname: ${surname}`);
//           }
//     }
// } 

//Example 1
// function Details(firstName, surname, email) {
//     this.firstName = firstName;
//     this.surname = surname;
//     this.email = email;
// }
// let person1 = new Details('Joel', 'Mukanya', 'joel@gmail.com');
// console.table(person1);

//Create 2 constructor functions
// function Player1(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }

// let messi = new Player1('Lionel', 'Messi');
// let ronaldo = new Player2('Christiano', 'Ronaldo');

// function testing(goat) {
//     if(goat.constructor === Player1) {
//         document.getElementById("goat").innerHTML = ("you are the true Goat🐐");
//     }
//     else {
//         document.getElementById("goat").innerHTML = ("You are a fraud💰👀");
//     }
// }

// testing(messi);

Functions are objects
==========================
Please keep in mind that everything is Javascript