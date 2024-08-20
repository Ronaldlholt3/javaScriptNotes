console.log("hello me,"[7]);

console.log("".length);

let = "hello me";
console.log("hello me"[0]);

//** this is practice code*/

let isRaining = true;
let temperature = 20;
let planet = "earth";

temperature = temperature + 10;

console.log(temperature);

console.log(
  "Hey Jay I love you" +
    " i want some of you" +
    " but i can touch you sooo ouo but i will be good"
);

/*
 *
 * Converting temperatures
 *
 * Celsius-to-fahrenheit
 *
 * F = C X 1.8 + 32
 */

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

let bool = "1" === 1;

console.log(bool);

let subscribe = true;
let loggedIn = true;

if (subscribe === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}

let cash = 30;
let price = 40;

if (cash > price) {
  console.log("you paid extra - heres x amount of dollars in change");
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day");
} else {
  console.log("not enough money - you still owe x dollars");
}

let count = 1;

while (count <= 100) {
  console.log(count);
  count = count + 1;
}

for (let i = 1; i <= 20; ++i) {
  console.log(i);
  if (i % 3 === 0) {
    console.log("${i} -> Frontend");
  }
}

let counts = 1;

while (counts <= 20) {
  console.log(counts);
  counts = counts + 1;
}

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("$[i] -> Frontend Simplified");
  } else if (i % 3 === 0) {
    console.log("$[i] -> Frontend");
  } else if (i % 5 === 0) {
    console.log("$[i] -> Simplified");
  } else {
    console.log("$[i] -> ${i}");
  }
}

const str = "Ronald Holt";

for (let i = 0; i < str.length; ++i) {
  console.log(str[i]);
}

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(10));
console.log(convertCelsiusToFahrenheit(30));

let arr = [20, 30, 40, 50, 100];

//**Calling an element in an arry is similar to a string**//

console.log(arr[0]);

//last element of array://

console.log(arr[arr.length - 1]);

//Add element onto end of arry//
arr.push(200);

console.log(arr);

//Filter method, it's a callback with syntax inside a syntax//

arr.filter((element) => {
  console.log(element);
});

//[20, 30, 40, 50, 100] this'll loop over every
//element 5 times each time for every element in the arry
//And each time it runs it's looking for the return true
//We are looping over the first elemt
let newArr = arr.filter((element) => {
  console.log(element);
  return true;
});

//This will tell the console
// let newArr = arr.filter((element) => {
//  console.log(element)
//   if (element < 50) {
//        return true;
//  }
//})

/**
 * Filter out all the 'FAIL' elements in an arry
 *
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['Fail', 'B'] => ['B']
 * ['Fail'] => []
 *
 */

/**let grades = ['A+', 'A', 'Fail']

let goodGrades = grades.filter ((element) => {
    console.log(element)
    if (element !== 'FAIL') {
        return true;
    }
    
})

console.log(goodGrades)
*The long filter method don't work on this computure but short method below do.
* it gives the same answer.
*/

let grades = ["A+", "A", "FAIL", "B+", "B"];

let goodGrades = grades.filter((element) => {
  return element !== "FAIL";
});

console.log(goodGrades);

/**
 * Another way to write this method but even shorter.
 *
 * let grades = ['A+', 'A', 'FAIL', 'B+', 'B']
 *
 * let goodGrades = grades.filter (element !== 'FAIL')
 *
 * console.log(goodGrades)
 *
 * This will show all the good grades except for FAIL.
 * It's the same as the long and short version when it comes to the results but even shorter.
 *
 */

/**
 * The map method
 * example problem and how to use the map method
 *
 * Turn each element in an arry of dollars into cents
 *
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3];

let cents = dollars.map((element) => {
  console.log(element);
  //where the 'element' names are at I can make them into anyhing.
  return element * 100;
}); //this is the long way

console.log(cents); //After setting up the function up above this will allow me to see the updated program

/**
 * Short way of doing this problem above
 *
 * let dollars = [1, 5, 10 , 3];
 *
 * let cents = dollars.map(element => element * 100)
 *
 * console.log(cents)
 */

/**
 * If I have to use a for loop to achieve this without the map method
 *I'll have to create a new 'cents' arry
 *
 * loop over every element in 'dollars'
 *
 * multiply the elemt by 100
 * add this element onto 'cents' arry
 */

for (let i = 0; i < dollars.length; ++i) {
  cents.push(dollars[i] * 100);
}

console.log(cents);

/**
 * Objects
 *
 * Objects are used to store multiple properties in one variable.
 *
 * When defining objects it'll be with {}
 *
 * example: let user = {}
 *
 * let userFirstName = 'Ronald'
 * let userLastName = 'Holt'
 * let userDiscordId = 'Ronald Holt 2o4hu4'
 * let userSubscriptionStaus = 'VIP'
 */

/**
 * I can simplifiy the above  variables with turning them into an object.
 *
 *
 */

let user = {
  username: "Ronald",
  email: "Ronaldlholt3@gmail.com",
  subscriptionStatus: "Vip",
  discordId: "Ronald flnjg53",
  lessonsCompleted: [0, 1],
  password: "test123",
};

console.log(user.username);

console.log(user.subscriptionStatus);

console.log(user.lessonsCompleted.map((elem) => elem * 2));
/**
 * I just turned all these variables into one variable
 *
 */

/**
 * How to register a function?
 *
 * This is how we register a function,
 */

//function register(
 // name,
 // email,
  //subscriptionStatus,
 // lessonsCompleted,
  //password
//) {
   // let user = {
      //  username: name,
      //  email: email,
      //  password: password,
      //  subscriptionStatus: subscriptionStatus,
       // lessonsCompleted: lessonsCompleted,
    //}
   // users.push(user);
   
//}

//register({
  //  username: 'Ronald',
  //  email: 'Ronaldlholt3@gmail.com',
  //  discordId: 'Ronald flnjg53',
   // lessonsCompleted: [0, 1]
//});

//console.log(users);

/**
 * First way to access an element in DOM
 * 
 *  
 * Second way to access the element for styling
 * 
 */

// The first way to access
console.log(document.querySelector('#name'));

// The second way to access it 
console.log(document.getElementById('name'))

//Changing html on the page using the DOM method
document.querySelector('#name').innerHTML += " I will graduate and be rich"

//Changing the CSS
document.querySelector('#name').style.color = 'blue'

function colorChangingBtn() {
    document.querySelector('#name').style.color ='blue'
    console.log('clicked');
}
