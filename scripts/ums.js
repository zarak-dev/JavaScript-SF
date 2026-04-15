//Task 1
let users = [
  { name: "Zarak Khan", id: 407, age: 25, isActive: true },
  { name: "Alice Khan", id: 508, age: 17, isActive: false },
  { name: "Jin Khan", id: 917, age: 19, isActive: true },
  { name: "Adam Khan", id: 247, age: 20, isActive: true },
];
console.log(users);

//Task 2
const id = 407;
let age = 25;
var name = "Zarak Khan";

//Task 3
let userNickName = "Zarkkyy";
let userMarks = 300;
let userSmartMember = true;
let lastLogin = null;
let resignDate;
let uniqueId = Symbol("$");

//Task 4 de ke munga new user add kaw
function addUser(newName, newAge, newStatus) {
  const newUser = {
    newName: newName,
    id: users.length + 1,
    age: newAge,
    isActive: newStatus,
  };
  users.push(newUser);
  // console.log(users);
  // console.log(users.length);
}
//addUser("Rohaan", 24, true);
//Task 5
const deleteUser = function (userId) {
  return users.filter((user) => user.id !== userId);
};
const list = deleteUser(917);
console.log(users, "All users");
console.log(list,'filtered');

//Task 6
const getActiveUser = () => users.filter((user) => user.isActive);
console.log(getActiveUser());

//Task 7
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  if (user.age < 18) {
    console.log("Minor");
  } else {
    console.log("Adult");
  }
}

//Task 8
for (let user of users) {
  switch (user.isActive) {
    case true:
      console.log(`${user.name}: Online`);
      break;

    case false:
      console.log(`${user.name}: Offline`);
      break;

    default:
      console.log(`Unknown Status: ${user.name}`);
  }
}

//Task 9
for (let i = 0; i < users.length; i++) {
  console.log("Index " + i + " belongs to: " + users[i].name);
}

let counter = 0;
while (counter < users.length) {
  console.log(`Checking User ID: ${users[counter].id}`);
  counter++;
}

for (let user of users) {
  console.log("Hello " + user.name);
}

let sampleUser = users[0];
for (let key in sampleUser) {
  console.log("This is property of " + key);
}

//Task 10
let totalAge = 0;
for (let user of users) {
  totalAge += users.length;
}
let averageAge = totalAge / users.age;
console.log("Average age of user", averageAge);

// Task 11
let firstUser = users[0];
if (firstUser.age >= 18) {
  console.log("Mature", firstUser.name);
}

for (let user of users) {
  if (user.isActive && user.age > 18) {
    console.log("Matured " + user.name);
  }
}

//Task 12
var globalUser = users[0];

const myFunc1 = function () {
  let x = 34;
  console.log(globalUser);
};

{
  let x = "Sajid";
  const age = 25;
}

//Task 12
//console.log(testVar);
//console.log(testLet);

var testVar = "Khan";
let testLet = "Fahad";

//Task 13

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Current count is", count);
  };
}
const myCount = createCounter();
myCount();
myCount();
myCount();
myCount();
myCount();

//Task 14
const myObj = {
  ...users[2],
  describe: function () {
    console.log(this.name);
  },
};
myObj.describe();

//Task 15
const finalUser = ({ name, age }, role = "Guest") => {
  console.log(`${name} is ${age} and ${role}`);
};
finalUser(users[0], "Admin");
