class Animal {
  constructor(name: string){ }
  getAnimalName() { }
  makeSound() { }
}

const animals: Array<Animal> = [
  new Animal('lion'),
  new Animal('mouse'),
  new Animal('snake')
]

class Lion extends Animal {
  makeSound() {
    return 'roar'
  }
}
class Squirrel extends Animal {
  makeSound() {
    return 'squeak'
  }
}
class Snake extends Animal {
  makeSound() {
    return 'hiss'
  }
}

function AnimalSound(a: Array<Animal>) {
  for(let i = 0; i <= a.length; i++) {
    a[i].makeSound()
  }
}

AnimalSound(animals)