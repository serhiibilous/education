//
// function logPerson() {
//   console.log(`Person ${this.name}, ${this.age} ${this.job}`)
// }
//
// const person1 = {name: 'John', age: 21, job: 'Developer'}
// const person2 = {name: 'Mike', age: 28, job: 'Driver'}
//
// bind(person1, logPerson)
// bind(person2, logPerson)
//
// function bind(person, action) {
//   this.name = person.name
//   this.age = person.age
//   this.job = person.job
//   action()
// }

const treeCompare = (a, b) => {
  if (a.val !== b.val) return false
  if (a.children.length !== b.children.length) return false
  let value = true

  function checkArrayValue(first, second) {
    console.log(first.val, second.val)
    if (first.val !== second.val) return false
    return first.children.length === second.children.length;

  }

  function arrayLoop(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      console.log(checkArrayValue(array1[i], array2[i]))
      if (!checkArrayValue(array1[i], array2[i])) {
        let value = false
      }
    }
  }

  arrayLoop(a.children, b.children)

  return value
};