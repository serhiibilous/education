function wait(message, time) {
  setTimeout(function timer() {
    console.log(message);
  }, time);
}

for (var i = 1; i <= 5; i++) {
  (function () {
    const www = i;
    setTimeout(function timer() {
      console.log(www);
    }, www + 1000);
  })();
}

function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

var foo = new CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
