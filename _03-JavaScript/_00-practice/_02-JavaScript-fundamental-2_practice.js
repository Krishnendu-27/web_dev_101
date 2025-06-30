/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (soone average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

9;
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphineScore1 = calcAverage(44, 23, 71);
let KoalasScore1 = calcAverage(65, 54, 49);
let dolphineScore2 = calcAverage(85, 54, 41);
let KoalasScore2 = calcAverage(23, 34, 27);

function checkWinner(dolphineScore, KoalasScore) {
  if (dolphineScore > 2 * KoalasScore) {
    console.log(
      `Koalas win dolphine score ${dolphineScore} kolas score ${KoalasScore} `
    );
  } else if (2 * dolphineScore < KoalasScore) {
    console.log(
      `Dolphines win dolphine score ${dolphineScore} kolas score ${KoalasScore} `
    );
  } else {
    console.log("No tems WIn");
  }
}
// checkWinner(dolphineScore1, KoalasScore1)

/*

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

*/

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (bill * 15) / 100;
  } else if (bill >= 300) {
    return (bill * 20) / 100;
  } else {
    return bill;
  }
}
const bills = [125, 555, 44];

const tips = bills.map(calcTip);

console.log(tips);

const total = bills.map((bill, i) => bill + tips[i]);
console.log(bills);

// sumofbill(bills.values());
// console.log(sumofbill(250));
// console.log(total);
// console.log(sumofbill(150));
// console.log(total);
// console.log(sumofbill(50));
// console.log(total);
// console.log(sumofbill(950));
// console.log(total);
console.log("Bills:", bills); // [125, 555, 44]
console.log("Tips:", tips); // [18.75, 111, 8.8]
console.log("Total:", total);

// challenge
// ram has 3 friends and his best friend is called goku
let ramsdetails = {
  firstname: "ram ",
  lastname: "das",
  age: 50,
  class: "3rdsem",
  gmail: "ram123@gmail.com",
  ram_frined: ["goku ", "saitama", "raichu"],
  drivinglincence: true,
  getsummary: function () {
    return `${this.firstname} is a ${this.age} guy who ${
      this.drivinglincence ? "has driving licence" : "has not own the licence"
    } and his best frind name is ${this.ram_frined[1]}`;
  },
};

// let dynamic_friend = prompt("enter the name to see his friend list");

/* console.log(
`${ramsdetails.firstname} have ${ramsdetails.ram_frined.length} friends his best frined is ${ramsdetails.ram_frined[0]}`;
 );
*/
// challenge
// get summary of ramdetails
/*
console.log(
  `${ramsdetails.firstname} is a ${ramsdetails.age} guy who ${
    ramsdetails.drivinglincence
      ? "has driving licence"
      : "has not own the licence"
  } and his best frind name is ${ramsdetails.ram_frined[1]}`
);
*/
console.log(ramsdetails.getsummary());

/*

Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name,mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

*/

let MarkMiller = {
  name: "Mark Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
let JohnSmith = {
  name: "John Smith",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

if (MarkMiller.calcBMI() <= JohnSmith.calcBMI()) {
  console.log(
    `John's BMI ${JohnSmith.calcBMI()} is higher than Mark's ${MarkMiller.calcBMI()}`
  );
} else {
  console.log(
    `Mark's BMI ${MarkMiller.calcBMI()} is higher than John's ${JohnSmith.calcBMI()}`
  );
}

/*

Coding Challenge #4

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

*/

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tipss = [];
let totals = [];

for (let i = 0; i < bill.length; i++) {
  let tip = calcTip(bill[i]);
  tipss.push(tip);
  totals.push(tip[i] + bill[i]);
}
console.log(tipss);

console.log(total);
