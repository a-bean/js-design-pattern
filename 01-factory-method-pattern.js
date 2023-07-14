class Animal {
  speak() {
    throw new Error("You have to implement the method speak!");
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

// 实现工厂模式
class AnimalFactory {
  createAnimal(animalType) {
    switch (animalType) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw new Error(`Invalid animal type: ${animalType}`);
    }
  }
}

const animalFactory = new AnimalFactory();
const dog = animalFactory.createAnimal("dog");
console.log(dog.speak()); // Woof!
const cat = animalFactory.createAnimal("cat");
console.log(cat.speak()); // Meow!
