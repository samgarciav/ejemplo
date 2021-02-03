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


/* -------------------------------------------- */
class Turtle {
  constructor(name,color) {
      this.name = name;
      let _color = color;
      this.setColor = color => { return _color = color; }
      this.getColor = () => _color;
  }
}

const raph = new Turtle('Raphael','Red');

