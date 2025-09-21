//1.even or odd

let number = 10;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//2.grading system

let score = 90;

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

console.log("შენი შეფასება არის: " + grade);

// 2.2 ასაკის და dress code–ის შემოწმება
let age = 18;
let dressCode = "yes";

if (age >= 18 && dressCode.toLowerCase() === "yes") {
  console.log("შეგიძლია გამოცდაზე გასვლა ");
} else {
  console.log("გამოცდაზე გასვლა შეუძლებელია ");
}

//

let name = "Babilina";

alert("გამარჯობა, " + name + "!");

let continueAction = confirm("გსურს გაგრძელება?");

if (continueAction) {
  console.log(Name + " გადაწყვიტა გაგრძელება ");
} else {
  console.log(Name + " არ სურს გაგრძელება ");
}

//4

let num1 = 5;
let num2 = 10;

if (num1 === num2) {
  console.log("ორივე რიცხვი თანაბარია");
} else if (num1 > num2) {
  console.log("პირველი რიცხვი დიდი არის მეორე რიცხვზე");
} else {
  console.log("მეორე რიცხვი დიდი არის პირველზე");
}
//5

let username = Babilina;
let password = Babilina666;

if (username === Babilina && password === Babilina666) {
  console.log("ლოგინი წარმატებულია ");
} else {
  console.log("მომხმარებლის სახელი ან პაროლი არასწორია ");
}

// 6

// ტემპერატურის შეყვანა
let temperature = 10;
let message;

if (temperature < 0) {
  message = "Freezing ";
} else if (temperature <= 20) {
  message = "Cold ";
} else if (temperature <= 30) {
  message = "Warm ";
} else {
  message = "Hot ";
}
console.log("ტემპერატურა არის:", message);
