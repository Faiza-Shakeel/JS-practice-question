                     // Loops (for, while, do-while)
// 1. Print the numbers 1 to 10 using a for loop.

for (let index = 1; index <= 10; index++) {
   document.getElementById("counting").innerHTML += index + "<br>";
}
// 2. Create a while loop that asks the user for input until they type "stop".
let userInput = "";         
while (userInput !== "stop") {
  userInput = prompt("Enter a word");
}
// 3.Print the multiplication table of 5 using a do-while loop.
let i=1;
do {
    
    document.getElementById("table").innerHTML += 5*i + "<br>";
     i++;
} while ( i<=10);