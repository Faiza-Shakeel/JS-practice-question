// Write a greet function that takes a name and prints a greeting.
function greet() {
    let name = prompt("Enter your name");
    document.getElementById("greeting").innerHTML = "Hello " + name;
}

// Create a function that returns the sum of two numbers.
function sum(a,b) {
 document.getElementById("sum").innerHTML = a + b;
}

// Write a function that returns the highest number from a list of numbers.
function highestNumber() {
    let numbers = [2, 4, 6, 8, 10];
    let highest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    document.getElementById("highest-number").innerHTML = highest;
}
greet();
sum(5,10);
highestNumber();