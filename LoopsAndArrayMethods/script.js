
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


// for (let i = a; i <= enterVal; i++){
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


// Find greatest value in array

// const array = [5,45,68,15,84,75,610,474,785];

// const findLargest = Math.max(...array); //using javascript math property and spread operator

// console.log(findLargest);


// Find largest value using for-loop


// let maxValue = array[0];

// for (let i = 0; i < array.length; i++){
//     if (array[i] > maxValue) {
//         maxValue = array[i];
//     }
// }

// console.log(maxValue);


//find largest value using reduce method

// const reduceMax = array.reduce((acc, curr) =>{
//     return Math.max(acc, curr)
// }, array[0]);

// console.log(reduceMax);


// Closures

// function Outer(){
//     let userName = 'Rajamanickam'; // Outer function variable also global as inner function
//     function Inner(){
//         console.log(userName); 
//     }
//     return Inner();
// }

// Outer();


// Array methods

// const months = ['January', 'February', 'March', 'April'];
// const allMonths = [['January', 'February', 'March', 'April'],['May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']]

// const method = months.length;  // 4
// const method = months.toString();  // January,February,March,April
// const method = months.at(2); // March
// const method = months.join(" $ ")  // January $ February $ March $ April
// const method = months.push("May","June`") // ['January', 'February', 'March', 'April', 'May', 'June`']
// const method = months.pop(); //  ['January', 'February', 'March']
// const method = months.shift(); // ['February', 'March', 'April']
// const unshift = months.unshift('Years have these months');
// console.log(unshift);    //['Years have these months','January', 'February', 'March']
// console.log(months);
// const method = delete months[1]; // ['January', empty, 'March', 'April']

// const remainingMonths = ['May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const method = months.concat(remainingMonths) //  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const method = months.copyWithin(2,0) //  ['January', 'February', 'January', 'February']
// const method = allMonths.flat(); // merge inside all the arrays in one array

//splice and slice

// const sliceArray = ['Sunday', 'Tuesday', 'Sunday', 'Wednesday']
// const method = sliceArray.splice(1,0,'Monday') //  ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
// const addDay = sliceArray.splice(4,0,'Thursday', 'Friday') // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// const addSat = sliceArray.push('Saturday')
// const toSpliced = sliceArray.toSpliced(1,1)  // ['Sunday', 'Wednesday']

// Search methods

// console.log(months.indexOf('April')); // 3
// console.log(sliceArray.lastIndexOf('Sunday')); // if two same values are there last index to be shown
// console.log(sliceArray.includes('Tuesday')); // if yes boolean value to be the output

// Sorting methods - alphabetic sort

// const sortMethod = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// console.log(sortMethod.sort()); // sort alphabetically order affect on original array
// console.log(sortMethod.reverse());  // sort reverse order affect on original array
// console.log(sortMethod.toSorted()); // sort alphabetically do not affect original array
// console.log(sortMethod.toReversed()); // sort reverse order don't affect on original array

// sorting methods - numeric sort

// const numericSort = [23,54,78,18,66,12]

// console.log(numericSort.sort((a,b) => b-a)); // sorted array based on condition
// let mapMethod = numericSort.map((val)=> val *2 ) //  return an array value
// console.log(mapMethod);
// let reduce = numericSort.reduce((acc, curr)=> acc + curr); // return an single value
// console.log(reduce);
// let forEach = numericSort.forEach((val)=> console.log(val)); // return value line by line in values not an array
// let filter = numericSort.filter((ele) => ele > 30); // [54, 78, 66]
// console.log(filter);


// Objects 

// const userDetails = {
//     name : 'Rajamanickam',
//     age : 25,
//     phoneNo : 9791310725
// }

// const userAddress ={
//     address : '87, Panditha Nehru Street, Salem'
// }
// console.log(userDetails);

// object cloning using assign
// let cloningObj = Object.assign({}, userDetails);
// console.log(cloningObj);

// object cloning using spread
// let cloneObj = {...userDetails};
// console.log(cloneObj);

// merge object using spread
// const mergeObj = {...userDetails,...userAddress};
// console.log(mergeObj);

//merge using assign
// let mergeUsingAssign = Object.assign(userDetails,userAddress);
// console.log(mergeUsingAssign);
