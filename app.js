// declaration
class Animal {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
    // object.assign(this, props) can be used instead of writing the 3 lines of code above
  }
}

class Dog extends Animal {
  contructor(props, type) {
    Super(props);
    this.type = type;
  }
  speak = () => {
    console.log(`${this.name} barks!`);
  };
  goodBoi = () => {
    console.log(`${this.name} is a good ${this.type}`);
  };
}

const spot = new Dog({ name: "spot", color: ["black", "white"], age: 10 }, "Dalmation");

console.log(spot);

spot.speak();
spot.goodBoi();

// Expression: the class is anonymous but assigned to a variable
// const Animal = class {};

// expression; the class has its own name
// const Animal = class Animal1 {};
