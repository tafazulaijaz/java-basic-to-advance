const fruits1 = ['apple', 'banana', 'grapes', 'mango', 'papaya']

for(let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
}

for(const fruit of fruits) {
     console.log(fruit);
}


const user = 'tafazul'


for(const a of user) {
     console.log(a);
}

fruits.forEach((fruit) => console.log(fruit))


const fruits = ['apple', 'banana', 'grapes', 'mango', 'papaya']

const capital = fruits.filter((fruit) => {
  console.log(fruit);
  return fruit.length >= 6 
})
