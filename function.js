// function definition...
function mySelf(username,profession,age) {
  console.log(`my name is ${username || 'tafazul'}.`);
  console.log(`i am a ${profession}`);
  console.log(`i am ${age} years old.`);
}

const returnValue = mySelf()

mySelf('tufail','Science Teacher',14)
mySelf('tahir','Math Teacher',10)
mySelf('','Web Developer',16)

function addTwoNumbers(a, b) {
  return a + b
}

const result = addTwoNumbers(85,6)
console.log(result);

function addTwoNumbers2(a, b) {
  return a - b
}

const result2 = addTwoNumbers2(85,6)
console.log(result2);
