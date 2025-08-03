// javascript is a prototype based language from the start but to use OPPS functionality its give acess use class, object , constructor .
// OPPS is like a blueprint its also known as  Class and bye the class new dataset created that called  object
// prototye mens extra property and functionalty  add in any given data type
// for accesing prototype
let computer = { cpu: 50, ram: 8 };
let laptop = { cpu: 12, ram: 32 };
let lenevo = { screan: "HD", comapny: "MSI", __proto__: computer };
console.log(computer); // here we call normal it
console.log(computer.cpu); // here i call its one valur cpu so it give me 50
console.log(computer.__proto__); //  tpits the way to acess the prototype *use in browser useing double underscore '__' called dunder prototype
console.log(lenevo, lenevo.__proto__);
// so another new way to acess the property the new way with `setPrototypeOf` and `getPrototypeOf`
let type = {
  ram: 50,
};
let newpc = {
  rom: 128,
};
//Object.setPrototypeOf(/* the first value in which property i want to acess *//* whcih property i ascess */);
Object.setPrototypeOf(newpc, type);

console.log(Object.getPrototypeOf(newpc));
// object has no parent property so its parent value its get null
function twoval(num1, num2) {
  this.num1 = num1; // here this mens its parent so i can now acess num1 when i called twoval
  this.num2 = num2;
}
twoval.prototype.increment = function () {
  //   console.log(`incress is ${this.num1  = this.num1+1}`);
  return this.num1++;
};
let check = new twoval(80, 60);
// here we give "check" functinaloty of "twoval"  by given new
console.log(check.increment());
console.log(check.increment());

// so function array string are all object so if give object a property its work on "function array string" but if i give spesefic "function array string" any one power then its only work in that only

// example
// i want to get a new functinality that trim a string and give the lenght in the develeoper way
// ex : "hi bro      " its has 12 lenghth but developwer way its has 5
Object.prototype.devLenghth = function () {
  console.log(`the devlenghth is ${this.trim().length - 1}`);
};
// i can do this in string also but doing in Object we can use in other 3
let test1 = "hi bro      ";

test1.devLenghth();
// we can give coutomize error
/*
function Drink(params) {
    if (!new.target) {
        throw new Error("Please use the 'new' keyword");
        }
        this.params = params;
        }
        
        // Add a method to the prototype
        Drink.prototype.getMessage = function () {
            return `I love to drink ${this.params}`;
            };
            */
function drink(params) {
  if (!new.target) {
    throw new Error("Please add new keyword");
  }

  drink.prototype.sms = function msg() {
    return `i love to drink ${this.params}`;
  };
}

let tea = new drink("tea");
let watter = new drink("watter");
console.log(tea.sms());
console.log(watter.sms());

// when we use prototype like a chain its become prototypechain
Array.prototype.Lenghth = function () {
  return `the devlenghth is ${this.length}`;
};
let arr = [1, 2, 3, 557, 7, 7];
console.log(arr.Lenghth());

// we can extend the funcanality one to another

class users {
  constructor(username) {
    this.username = username;
  }
  logme() {
    return `hi i am ${this.username}  logged in the server`;
  }
}

let users1 = new users("krish");
console.log(users1.logme());

// now i will inhariated the funcion

class teacher extends users {
  constructor(username, email, password) {
    super(username); // we use super keyword its go the "users" and took the username
    this.email = email;
    this.password = password;
  }
  staus() {
    return `i am ${this.username} and my eamil is is ${this.email}`;
  }
  static id() {
    return `${this.password}`;
  }
  // static dont give the acess
}
let teacher1 = new teacher("sachin", "sachin@gmail.com", 12354);

console.log(teacher1.staus());

//encapsulation

class bank {
  #balance = 0;

  getbalance() {
    return `$ balance ${this.#balance}`;
  }
}
let account1 = new bank();

console.log(account1.getbalance());
// here the balance not acessable outside the class

// Abstraction

// its main work is its need the value he dose not care what is going behind the scence
class cofffe {
  start() {
    return `Start the machine`;
  }
  brew() {
    return ` took 5 bins and paste it `;
  }
  pressStartButton() {
    let msgone = this.start();
    let msgtwo = this.brew();
    return `${msgone} then ${msgtwo}`
  }
}

let cofffecup = new cofffe();

// console.log(cofffecup.start());
// console.log(cofffecup.brew());
console.log(cofffecup.pressStartButton());

