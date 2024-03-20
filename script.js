const enterVal = prompt('Enter a value :')


//Left to right triangle

for (let i = 0; i <= enterVal; i++) {
    let star = "* ";
    console.log(star.repeat(i));
}


//Right to left triangle

for (let i = enterVal; i >= 1 ; i--){
  let star = '* ';
  console.log(star.repeat(i));
}


//full triangle

for (let i = 0; i <= enterVal ; i++){
  let star = '* ';
  let space = ' ';
  console.log(space.repeat(enterVal-i) + star.repeat(i));
}


//diamond 

let star = '* ';
let space = ' ';
for (let i = 1; i <= enterVal; i++){
  let triangle = space.repeat(enterVal-i) + star.repeat(i);
  console.log(triangle);
}
for(let i = enterVal-1; i >=1; i--){
  console.log(space.repeat(enterVal-i) + star.repeat(i));
}
