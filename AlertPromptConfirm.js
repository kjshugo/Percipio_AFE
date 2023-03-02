// JavaScript Document for Alert, Prompt and Confirm
"use strict";

alert("This is an alert message");

let name = prompt("The prompt message is: \nPlease enter your name: ");
console.log("Your name that was entered is :" + name);

let subject = prompt("Please enter your selected subject: ","JavaScript");
console.log("Your selected subject is " + subject);

let inpa = prompt("Enter a number to get its square value :");
let inpb = inpa * inpa;
alert(inpa + " squared is " + inpb);

let output = confirm("Confirmation message: \nReady to move to the next demo?");

if(output) {console.log("You pressed OK");}
else{console.log("You pressed CANCEL");}
