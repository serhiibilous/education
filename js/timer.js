// function timer() {
//   let time = 0
//   const interval = setInterval(() => {
//     time = time + 1
//     if (time === 5) clearInterval(interval)
//     console.log(time)
//   }, 1000)
// }

function timer(value) {
  let time = value ? value : 1
  setTimeout(() => {
    console.log(time)
    ++time
    timer(time)
  }, time * 1000)
}

timer()
