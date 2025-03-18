 // Write a program that checks if a person is a child, teenager, adult, or senior based on age.
 let age = prompt("Enter your age");
 if (age < 13) {
     document.getElementById("age").innerHTML = "Child";
 }
 else if (age < 20) {
     document.getElementById("age").innerHTML = "Teenager";
 }
 else if (age < 65) {
     document.getElementById("age").innerHTML = "Adult";
 }
 else {
     document.getElementById("age").innerHTML = "Senior";
 }
 // Use a ternary operator to check if a number is positive, negative, or zero.
 let number = prompt("Enter a number");
 let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
 document.getElementById("number").innerHTML = result;
//  Simulate a traffic light with a switch statement: "Stop", "Ready", or "Go"
let light = "Go";
switch (light) {
    case "Stop":
        document.getElementById("light").innerHTML = "Red";
        break;
    case "Ready":
        document.getElementById("light").innerHTML = "Yellow";
        break;
    case "Go":
        document.getElementById("light").innerHTML = "Green";
        break;
    default:
        document.getElementById("light").innerHTML = "Invalid";
}