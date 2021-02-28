# Стрелочные функции

Базовое использование
```js
const func = value => value
```

Функция с несколькими параметрами требует заключение их в скобки
```js
const func = (a, b ,c) => value
```

Функция без параметров используется с пустыми скобками
```js
const func = () => value
```

Когда функция делает другие вычисления она оборачивается в фигурные скобки
```js
const func = (a, b) => {
  // do something else
  return value
}
```

## Главная особенность
###Стрелочные функции не имеют своего собственного контекста выполнения `this`.

На практике это означает, что они наследуют сущности this и arguments от родительской функции.

```js
Нету хорошего примера
```

------------------

Стрелочные функции не имеют объекта `arguments`, 
что бы получить список параметров можно использовать rest параметры.
```js
const foo = (...num) => console.log(num)
foo(1, 2, 3, 4) // [1, 2, 3, 4]
```

Стрелочная функция не может быть конструктором
```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```


## Где не нужно использовать стрелочные функции

Не нужно использовать в определении методов объектов
```js
const obj = {
  val: 1,
  foo: () => console.log(this.val, this),
  bar: function() {
   console.log(this.val, this)
  }
}
obj.foo() // undefined window
obj.bar() // 1 obj:{}
```

### Функции с динамическим контекстом
```js
Нету примера
```

## Где нужно использовать стрелочные функции

### Обработка списков значений
```js
const words = ['hello', 'WORLD', 'Whatever'];
const downcasedWords = words.map(word => word.toLowerCase());

const names = objects.map(object => object.name);
```

### Промисы и цепочки промисов

```js
this.doSomethingAsync().then((result) => {
  this.storeResult(result);
});
```