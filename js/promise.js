const Ok = new Promise(((resolve, reject) => {
  // resolve('Success')
  reject("Error")
}))

Ok.then(
  data => {
    console.log(data)
  },
  error => {
    console.log("Then error:", error)
  })
  .catch(error => console.log('Catch:', error))

// const www = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//   alert(result);
//   return result * 2;
// }).then(function(result) {
//   alert(result);
//   return result * 2;
// }).then(function(result) {
//   alert(result);
//   return result * 2;
// });
//
// www.then(data => console.log(data))