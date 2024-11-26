//let MarkWeight = 78;
//let MarkHeight = 1.69
//let JohnWeight = 92;
//let JohnHeight = 1.95;

//let MarkBMI = MarkWeight / (MarkHeight ** 2);
//let JohnBMI = JohnWeight / (JohnHeight ** 2);

//if (MarkBMI > JohnBMI){

    //console.log(`Mark has higher BMI  "${MarkBMI}"`)

//}
//else if (JohnBMI > MarkBMI) {
//    console.log(`John has higher BMI  "${JohnBMI}"`)
//}


//Exercise
//Write a nested if...else statement.
//Declare a variable called num.

//let num = -10;

//if (num >= 0 && num <= 100 ) {
  //  console.log (`Number is positive "${num}"`)
//}
//else (num < 0) 
  //  console.log (`Number is negative "${num}"`)
//Add an if...else statement that checks if num is positive & greater than 100.
//Add another statement that checks if num is positive but less than 100.
//Add a final statement to check if num is negative.
//Exercise
//Write an if..else statement for the following requirements:

//If a learner gets 90 or higher: console.log("A")
//If a learner get 80 or above: console.log("B")
//If a learner get 70 or above: console.log("C")
//If a learner get 55 or above: console.log("D")
//Any grade lower than 55: console.log("F")

//let gpa = 55;

// switch (gpa) {
//    case 90:
//      console.log("A");
//       break;
//     case 80:
//      console.log("B");
//      break;
//    case 70:
//      console.log("C");
//      break;
//    case 60:
//      console.log("D");
//      break;
//    default:
//      console.log("Student is at risk.")
//      break;
//  }
  
  
  // Ternary
   //   let age  = 22
   //   age > 18 ? "driver" : "non-driver"
  //(condition) ? (ifTrue) : (ifFalse)
  
  //try {
      // Try this first
      // ...and if anything goes wrong....
  //} catch (error) {
                      // ....catch what happened.
 // }

 //Count down from 10 to 1.

//  for (let i = 10; i > 0; i--) {
// console.log(`Count down from ${i} to 1. = "${i}"` );
//  }

 //Output odd numbers from 1 to 10.
//   for (let i = 1; i <= 10; i += 2) {
// console.log(`Odd Numbers from 1 to ${i}. = "${i}"` );
// }

//Output even number from 1 to 10.
//  for (let i = 2; i <= 10; i += 2) {
//   console.log(`Even Numbers from 1 to ${i}. = "${i}"` );
//   }

//Output multiples of 3, starting at 6 and ending at 60.

// for (let i = 6; i <= 60; i ++) {
//   if ( i % 3 === 0 ) {
//  console.log(`Multiplication of 3 starting from 6 to ${i}. = "${i}"` );

//   }
// }

//Output an increasing number of # symbols, from 1 to 7, as shown below.

// var txt = ""; 
// for(var count = 0; count < 7; count++) { 
//     console.log(txt+="#"); 
// }

// const str = "Hello World";

// // for (const i in str) {
// // 	if (str[i] == "l") {
// // 		continue;
// // 	}

// // 	console.log(str[i]);
// // }

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }

// var number = 0;
// var counter = 0;

// while (counter < 100) {
//   number ++;
//   counter ++;
//   if (number % 3 == 0 && number % 5 == 0)
//     console.log ("FizzBuzz");
//   else if (number % 3 == 0)
//     console.log("Fizz");
//   else if (number % 5 == 0)
//     console.log("Buzz");
//   else
//     console.log(number);
// }

console.log("Here are the first prime numbers:")
console.log("2")
console.log("3") 

for (i = 5; i < 98; i += 2) {

    var j = 3;
    var prime = true;

    do (i % j !== 0) ? j += 2 : prime = false;
    while( prime && j <= Math.sqrt(i) )

    if (prime) console.log(i);
}