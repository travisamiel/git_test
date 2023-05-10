// .map()
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

  
// Object contructors
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'

  Player.prototype.addedFunction = () => {
    console.log('i am another function added after the Player function was declared');
  }


// constructors - functions are on the prototpye
class Car{

    constructor(make, model, year, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive(){
      console.log("You drive the car!");
    }
    brake(){
      console.log("You step on the brakes!");
    }
}
  
  let car1 = new Car("Ford", "Mustang", 2022, "red");
  let car2 = new Car("Chevy", "Corvette", 2021, "blue");


// Factory functions
  const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'
  