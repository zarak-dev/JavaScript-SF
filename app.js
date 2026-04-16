const name = "Zarak" //String
 const cart = [{
  name: 'HP',
  Price: 1060,
},
{
  name: 'Dell Mouse',
  price: 250,
}
];
console.log(cart);
//Regular
let sumNumber = function(num1, num2){
  return num1 >= num2 ? num1 : num2; 
};
console.log(sumNumber(3, 4));

let myNumber = function(number){
  if (number % 3 === 0 && number === 5){
    return 'Fizzbuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
    } else if(number % 5 === 0){
    return 'Buzz';
    } else {
      return number;
    }
} 
console.log(myNumber(5));


  function displayEven(arr){
    for (const zNum of arr){
     if (zNum % 2 === 0)
      console.log(zNum);
    }
    };

  displayEven([1,3,2,4,5,6,7]);

  function displayOdd(arr){
    for (const aNum of arr){
     if (aNum % 2 != 0)
      console.log(aNum);
    }
    };

  displayOdd([1,3,2,4,5,6,7]);


  let myDog = {
    name: 'Jacky',
    age: 23,
    eat: function(){
      console.log('Chicken');
    },
    sleep: function jacky(){
      console.log('night');

    },
  }
  myDog.eat();
  myDog.sleep();

function newDog(name, age, breed, weight){
  return {
    name,
    age,
    breed,
    weight,
    eat(){
      console.log('Bone');
    }
  }
}
const anotherDog =  newDog('Simba', 2, 'German', 4 );
console.log(anotherDog);

const dog2 = newDog('Maxxi', 4, 'GSD', '35KG');
console.log(dog2['age']);

function Cat(name, age, breed){
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.eat = function(){
    console.log(`${this.name} is eating Cat Food`)  
  };
  this.bark = function(){
    console.log('Meoww');

  }
};
Cat.prototype.sleep = '10pm';
myCat = new Cat('Simba', 2, 'russian');
console.log(myCat);
myCat.eat();
myCat.bark();
myCat2 = new Cat('Aimmy', 19, 'Australian');
console.log(myCat2);
myCat2.eat();
console.log(myCat.sleep);

function Cat(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}
Cat.prototype.sleep = '10pm';
Cat.prototype.species = 'Feline';

const myCats = [
  new Cat('Simba', 2, 'Russian Blue'),
  new Cat('Nala', 3, 'Siamese'),
  new Cat('Mochi', 1, 'Tabby')
];

for (let cat of myCats){
  console.log(`-${Cat.name}-`);

  for (let key in cat) {
    console.log(key + " : " + cat[key]);

  }

};

 myCats.splice(1,1);
console.log(myCats);

let myCar98 = {
  Name: 'Toyota XE',
  Model: 1998,
  Color: 'White',
};

const keys = Object.keys(myCar98);
console.log(keys);

const myCarDetails = Object.values(myCar98);
console.log(myCarDetails);
const forArrays = Object.entries(myCar98);
console.log(forArrays);

[
    [
        "firstName",
        "John"
    ],
    [
        "lastName",
        "Doe"
    ],
    [
        "age",
        50
    ],
    [
        "eyeColor",
        "blue"
    ]
];

for (let key of Object.entries(myCar98)) {
  console.log(key);

};


const detail = {name: "Test", age: 12};

const { age, name } = detail;

const cars = ["Corolla" , "Civic"];

const [firstCar, secondCar] = cars;




Object.entries(myCar98).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);   
});
let email1 = 'Zarak@smartforum.org';
updatedEmail = email1.toUpperCase();
console.log(updatedEmail);
let now = new Date();
console.log(now);

const hostelCity = [21, 32, 42, 33, 2, 1];
newHostelCity = hostelCity.find(u => u > 20);
console.log(newHostelCity);

updatedHostelCity = hostelCity.filter(u => u > 20);
console.log(updatedHostelCity);

const hostel1 = [
  { id: 101, name: "Aria", city: "New York", grade: 85, isOnline: true },
{ id: 102, name: "Ben", city: "London", grade: 92, isOnline: false },
{ id: 103, name: "Cyrus", city: "Dubai", grade: 78, isOnline: true },
{ id: 104, name: "Dina", city: "Tokyo", grade: 95, isOnline: true },
{ id: 105, name: "Echo", city: "Berlin", grade: 64, isOnline: false },
];

const hostel2 = hostel1.filter(u => u.city === 'Dubai');
console.log(hostel2);


let class10th = [22,3221,3,4,3221,332];
newClass = class10th.splice(0, class10th.length);
console.log(newClass);

while (class10th.length > 0) {
 class10th.pop();
}
console.log(class10th);
class10th.forEach((rollNo, index) => console.log(`at Index: ${index} : ${rollNo}` ));
class10th.length = 0;
console.log(class10th);
let school = "Ghazali School Hathian";
const arrSchool = school.split("");
console.log(arrSchool);
