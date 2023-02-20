// program that displays student's subject based on class group
let studentName = "Bolatito";
let classGroup = prompt("Please enter your class group");
let subjects = studentSubjects(classGroup);

function studentSubjects(classGroup) {
  if(classGroup == "Science") {
    console.log(`Hello ${studentName}, your subjects are Physics, Chemistry, Biology, and Technical Drawing.`);
}
else if(classGroup == "Social Science") {
    console.log(`Hello ${studentName}, your subjects are Accounting, Commerce, Marketing, and Geography.`);
}
else if(classGroup == "Arts") {
    console.log(`Hello ${studentName}, your subjects are Government, Economics, Literature, and History.`);
}
else {
    console.log (`Hello ${studentName}, your subjects are English and Mathematics.`);
}
}

// program that takes a positive number and finds the power of 2 nearest to that number
let num = prompt("Input a positive number:");
let pwr = 1;
function findPowerOfTwo(num) {
  while (pwr < num) {
    pwr *= 2;
  }
  if (pwr - num > num - pwr / 2) {
    pwr /= 2;
  }
}
findPowerOfTwo(num);
console.log(`the number ${pwr} is the power of 2 nearest to ${num}`);