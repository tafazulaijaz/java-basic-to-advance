
const dayNumber = 9;
switch (dayNumber) {
  case 0:
    console.log("It is Sunday Today");
  case 1:
    console.log("It is Monday Today");
  case 2:
    console.log("It is Tuesday Today");
  case 3:
    console.log("It is Wednesday Today");
  case 4:
    console.log("It is Thursday Today");
  case 5:
    console.log("It is Friday Today");
  case 6:
    console.log("It is Saturday Today");
   default :
    console.log('Please Enter a Valid Day Number')
}


const username ="tafazul"
const userAge = 0;
switch(true) {
  case (userAge >= 5 && userAge <= 17):
  console.log(`${username} is a School Student`)
  console.log("He is learning HTML CSS JavaScript")
  break
  case  (userAge >= 18 && userAge <= 24):
       console.log(`${username} is a College Student`);
       console.log("He is learning computer science");
   break
   case (userAge >= 25 && userAge <= 45):
    console.log(`${username} is a working professional`);
    console.log("He is working as web developer");
    break
    case (userAge >= 46 && userAge <= 120):
       console.log(`${username} is retired`);
      console.log("He is working at home");
      break
      default:
      console.log("Please enter a valid age")
}

const grade = "10"
switch (grade) {
  case "A" : 
  console.log("90% to 100%");
  break
    case "B" : 
  console.log("80% to 90%");
  break
    case "C" : 
  console.log("60% to 80%");
  break
    case "D" : 
  console.log("40% to 60%");
  break
  default:
    console.log("failed");
}
