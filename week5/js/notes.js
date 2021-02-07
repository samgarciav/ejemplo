/* class Dice {
  constructor(sides = 6) {
    this.sides = sides;
  }
  roll() {
    return Math.floor(this.sides * Math.random() + 1)
  }
  static description() {
    return 'A way of choosing random numbers'
  }
}
const blueDice = new Dice(20);

class Turtle {
  constructor(name,weapon) {
      this.name = name;
      this.weapon = weapon;
  }
  sayHi() {
      return `Hi dude, my name is ${this.name}`;
  }
  attack(){
      return `Feel the power of my ${this.weapon}!`;
  }

} 
const leo=new Turtle('Leo','hands');
*/

/* FACTORY FUNCTIONS */
const turtleFactory = (_name, _power) => {
  return {
    _name,
    _power,
    action: function () {
      console.log('Lets attack');
    },
    get name() { return this._name },

    set setName(nameEqualled) { return this._name = nameEqualled }
  }
}

const newTurtleByFactory = turtleFactory("Sam", "Learn");
console.log(newTurtleByFactory);


/* ------------------ CLASESS -------------------------- */
class Turtle {
  constructor(name, color) {
    this._name = name;
    let _color = color;
    this.setColor = color => { return _color = color; }
    this.getColor = () => _color;
  }

  get name() { return this._name }
}

const raph = new Turtle('Raphael', 'Red');



