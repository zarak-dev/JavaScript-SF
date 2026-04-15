// const name = "Zarak" //String
//  const cart = [{
//   name: 'HP',
//   Price: 1060,
// },
// {
//   name: 'Dell Mouse',
//   price: 250,
// }
// ];
// console.log(cart);

// let sumNumber = function(num1, num2){
//   return num1 >= num2 ? num1 : num2; 
// };
// console.log(sumNumber(3, 4));

// let myNumber = function(number){
//   if (number % 3 === 0 && number === 5){
//     return 'Fizzbuzz';
//   } else if (number % 3 === 0) {
//     return 'Fizz';
//     } else if(number % 5 === 0){
//     return 'Buzz';
      
//     } else {
//       return number;
//     }
// } 
// console.log(myNumber(5));


//   function displayEven(arr){
//     for (const zNum of arr){
//      if (zNum % 2 === 0)
//       console.log(zNum);
//     }
//     };
  
//   displayEven([1,3,2,4,5,6,7]);
  
//   function displayOdd(arr){
//     for (const aNum of arr){
//      if (aNum % 2 != 0)
//       console.log(aNum);
//     }
//     };
  
//   displayOdd([1,3,2,4,5,6,7]);
  

//   let myDog = {
//     name: 'Jacky',
//     age: 23,
//     eat: function(){
//       console.log('Chicken');
//     },
//     sleep: function jacky(){
//       console.log('night');
      
//     },
//   }
//   myDog.eat();
//   myDog.sleep();

// function newDog(name, age, breed, weight){
//   return {
//     name,
//     age,
//     breed,
//     weight,
//     eat(){
//       console.log('Bone');
//     }
//   }
// }
// const anotherDog =  newDog('Simba', 2, 'German', 4 );
// console.log(anotherDog);

// const dog2 = newDog('Maxxi', 4, 'GSD', '35KG');
// console.log(dog2['age']);

// function Cat(name, age, breed){
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.eat = function(){
//     console.log(`${this.name} is eating Cat Food`)  
//   };
//   this.bark = function(){
//     console.log('Meoww');
    
//   }
// };
// Cat.prototype.sleep = '10pm';
// myCat = new Cat('Simba', 2, 'russian');
// console.log(myCat);
// myCat.eat();
// myCat.bark();
// myCat2 = new Cat('Aimmy', 19, 'Australian');
// console.log(myCat2);
// myCat2.eat();
//console.log(myCat.sleep);

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

// for (let cat of myCats){
//   console.log(`-${Cat.name}-`);
  
//   for (let key in cat) {
//     console.log(key + " : " + cat[key]);
    
//   }
  
//};
 myCats.splice(1,1);
console.log(myCats);

