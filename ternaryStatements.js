// /*Refactor each function below into an arrow function. You must also call the function and make sure it works */

// /*Make sure to check that everything works as expected in the console before turning in your work */

// /*Exercise 1*/
// if(weather === "rain") {
//     console.log("Please wear rain boots")
// }

// //refactor below






// /*Exercise 2*/
// if(student == true && loggedIn == true) {
//     console.log("This is where we would write the code to show the entire site")
// }
// //refactor below





// /*Exercise 3*/
// let cash = 18;
// let lunch = "";

// if (cash < 10) {
//   lunch = "sandwich";
// }else if (cash <= 20 && cash > 11) {
//   lunch = "fancy sandwich";
// }else if (cash > 20) {
//   lunch = "lobster rolls";
// } 

// //refactor below





/*Exercise 1*/
const checkWeather = (weather) => {
  if(weather === "rain") {
      console.log("Please wear rain boots");
  }
}

checkWeather("rain");

/*Exercise 2*/
const checkStudentStatus = (student, loggedIn) => {
  if(student == true && loggedIn == true) {
      console.log("This is where we would write the code to show the entire site");
  }
}

checkStudentStatus(true, true);

/*Exercise 3*/
let cash = 18;
let lunch = "";

const chooseLunch = (cash) => {
  if (cash < 10) {
      lunch = "sandwich";
  } else if (cash <= 20 && cash > 11) {
      lunch = "fancy sandwich";
  } else if (cash > 20) {
      lunch = "lobster rolls";
  }
}

chooseLunch(cash);
