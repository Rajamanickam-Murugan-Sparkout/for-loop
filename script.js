
//for-loop workoutspace

// const enterVal = prompt('Enter a value :')

//Left to right triangle

// for (let i = 0; i <= enterVal; i++) {
//     let star = "* ";
//     console.log(star.repeat(i));
// }


//Right to left triangle

// for (let i = enterVal; i >= 1 ; i--){
//   let star = '* ';
//   console.log(star.repeat(i));
// }


//full triangle

// for (let i = 0; i <= enterVal ; i++){
//   let star = '* ';
//   let space = ' ';
//   console.log(space.repeat(enterVal-i) + star.repeat(i));
// }


//diamond 

// let star = '* ';
// let space = ' ';
// for (let i = 1; i <= enterVal; i++){
//   let triangle = space.repeat(enterVal-i) + star.repeat(i);
//   console.log(triangle);
// }
// for(let i = enterVal-1; i >=1; i--){
//   console.log(space.repeat(enterVal-i) + star.repeat(i));
// }



//Fibonacci series

// let enterVal = prompt('Enter value :');

// let a = 0;
// let b = 1;
// let c;

// while(enterVal >= 0){
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
//     enterVal = enterVal-1;
// }


// for (let i = 0; i <= enterVal; i++){
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }


//prime number

// function checkPrimeNumber(){
//     const enterVal = prompt('Enter any number: ')

//     for ( let i = 2; i < (enterVal <= 1); i++){
//         if (enterVal % i === 0) {
//             return false;
//         }
//         return true;
// }
// }

// checkPrimeNumber();

// function checkPrimeNumber(num){
//     let value = true;
//     if(num<=1){
//         value = false;
//     }
 
//     for(let i = 2; i*i <= num; i++){
//         if(num % i === 0){
//             value = false;
//             break;
//         }
//     }
//     if(value == true){
//         console.log(num, " is a prime number.");
//     }
//     else{
//         console.log(num, " is not a prime number.");
//     }
// }
// checkPrimeNumber(11);
// checkPrimeNumber(4);


//odd or even

// const checkOddEven = prompt('Enter a value :')

// if (checkOddEven % 2 == 0) {
//     console.log(`${checkOddEven} is Even number`);
// }else{
//     console.log(`${checkOddEven} is Odd number`);
// }


// Find gratest value in array

const array = [5,45,68,15,84,75,610,474,785];

const findLargest = Math.max(...array); //using javascript math property and spread operator

console.log(findLargest);