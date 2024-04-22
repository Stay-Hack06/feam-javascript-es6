/*Refactor each function below into an arrow function. You must also call the function and make sure it works */

/*Make sure to check that everything works as expected in the console before turning in your work */


/*Exercise 1*/
function addTwo(num1, num2){
    return num1 + num2
}
//refactor below
const addTwoB = (num1, num2) => num1 + num2;
console.log(addTwoB(3, 5));





/*Exercise 2*/
function templateLiteral(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}! Welcome to the most beautiful site in the world. We hope you learn everything you ever wanted to know and that your life from this day forward will be filled with joy, wonder and adventure. Thank you for stopping by!`
}
//refactor below
const templateLiteral2 = (firstName, lastName) => `Hello, ${firstName} ${lastName}! Welcome to the most beautiful site in the world. We hope you learn everything you ever wanted to know and that your life from this day forward will be filled with joy, wonder and adventure. Thank you for stopping by!`;
console.log(templateLiteral2('Staysha', 'Hackmann'));





/*Exercise 3*/
function hasDuplicates(arr) {
    const numMap = {};
    for (const num of arr) {
         if (numMap[num]) {
            return true;
        }
        numMap[num] = true;
    }

    return false;
}

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];

//refactor below

const hasDuplicates = (arr) => {
    const numMap = {};
    for (const num of arr) {
        if (numMap[num]) {
            return true;
        }
        numMap[num] = true;
    }
    return false;
}

// Example usage
const numbers3 = [1, 2, 3, 4, 5, 6];
const numbers4 = [1, 2, 3, 4, 2, 6];
console.log(hasDuplicates(numbers3));
console.log(hasDuplicates(numbers4));








/*BONUS */
function validateUserCredentials(users, inputUsername, inputPassword) {
    // Use the Array.prototype.some() method to check if any user matches the input username and password
    return users.some(user => user.username === inputUsername && user.password === inputPassword);
}

const validateUserCredentials2 = (users, inputUsername, inputPassword) => users.some(user => user.username === inputUsername && user.password === inputPassword);