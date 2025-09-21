// 1. even or odd
let number = 10;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// 2. grading system
let score = 51;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("grade:", grade);

// 2.2 age and dresscode
let age = 18;
let dressCode = "yes";

if (age >= 18 && dressCode.toLowerCase() === "yes") {
  console.log("can enter a club");
} else {
  console.log("cannot enter a club");
}

// 3. alert and confirm
let name = "Babilina";

alert("გამარჯობა, " + name + "!");

let continueAction = confirm("do you want to continue?");

if (continueAction) {
  console.log(name + " confirmed ");
} else {
  console.log(name + " declined ");
}

// 4. numbers equal or greater
let num1 = 5;
let num2 = 10;

if (num1 === num2) {
  console.log("equal");
} else if (num1 > num2) {
  console.log("num1 is greater");
} else {
  console.log("num2 is greater");
}

// 5. username and password
let username = "Babilina";
let password = "Babilina666";

if (username === "Babilina" && password === "Babilina666") {
  console.log("log in ");
} else {
  console.log("fail");
}

// 6. Temperature Warning
let temperature = 30;

if (temperature < 0) {
  console.log("Freezing ");
} else if (temperature <= 20) {
  console.log("Cold ");
} else if (temperature <= 30) {
  console.log("Warm ");
} else {
  console.log("Hot ");
}
