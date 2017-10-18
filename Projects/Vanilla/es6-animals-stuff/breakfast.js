class Breakfast {
  constructor(name) {
    this.name = name;
    this.firstConsumed = true;
  }
  breakfastFunc() {
    console.log('breakfast is the most important meal of the day');
  }
}

class Food extends Breakfast {
  constructor(name) {
    super(name);
    this.chewed = true;
  }

}
class Beverages extends Breakfast {
  constructor(name) {
    super(name);
    this.sipped = true;
    this.liquid = true;
    this.vessel = true;
  }
}
class Hot extends Beverages {
  constructor(name) {
    super(name);
    this.comforting = true;
  }
}
class Cold extends Beverages {
  constructor(name) {
    super(name);
    this.refreshing = true;
  }
}
class Sweet extends Food {
  constructor(name) {
    super(name);
    this.sugary = true;
  }
}
class Savory extends Food {
  constructor(name) {
    super(name);
    this.salty = true;
  }
}
var coffee = new Hot ('coffee');
console.log('coffee ->', coffee);