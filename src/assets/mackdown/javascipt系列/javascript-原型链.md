## javascript-继承与原型链详解

[MDN官网参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

1. #### 原型链

   原型:	就是对象

   - 显示原型:	prototype
   - 隐士原型:    __ proto __

   原型链: JavaScript对象通过**proto** 指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链

   条, 即原型链。

2. #### 重点

   - 对象都是由函数创建的
   - 函数都是对象
   - prototype显示原型为构造函数独有, 且所有函数都有prototype对象(原型属性)
   - 所有Object对象均有隐式原型__ proto __

3. #### 结构图(干货)

   ![prototype](K:\myBlog_frontEnd\src\assets\mackdown\images\prototype.jpg)

下面我们对上图进行讲解(已经理解可以跳过)

- 我们象从自定义函数红框左半部分开始看(即 将自定义函数视为一个构造函数)

①	假定我们新建一个自定义函数, 并根据函数创建一个自定义对象

```javascript
let Person = function () {
  this.a = 5;
  this.b = 10;
};

let zuozhe = new Person();
```

②	创建的对象`zuozhe`向上查找原型链 __ proto __ 就找到了`zuozhe`的构造函数`Person`的函数原型

```javascript
console.log(typeof zuozhe);	//object
```

③	此时的自定义函数是一个构造函数,	当作为构造函数去创建对象时有自身的函数原型即prototype, 

```javascript
console.log(typeof Person.prototype);	//object
```

④	自定义函数Person的函数原型`prototype`本身是一个对象(`Object`) 其结构如下

```
Person.prototype.a = 50;
console.dir(Person.prototype);
//
Object: {
	a: 50
	constructor: ƒ ()
	[[Prototype]]: Object
}
```

可以看到`prototype`对象中有三个属性,	一个是刚刚为其新增的属性`a`,	第二个是`prototype`的构造函数也就是自定义函数本身,	第三个则是`[[Prototype]]`即 `__ proto __` 

⑤紧接④	`prototype`是由`new Object`创建而来

```

```

⑥紧接④	prototype继续向上查找原型,因为prototype是一个object,,所以`prototype.__proto__`找到了Object原型

```
console.dir(Person.prototype.__proto__);
{
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: null
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
}
```

⑦紧接⑥	从上面`console.dir(Person.prototype.__proto__);`的输出结果可以发现

```javascript
Person.prototype.__proto__.__proto__ === null	//true
```

可知Object原型已经为当前原型链最顶层

------

- 现在从自定函数红框右半部分开始看(此时将自定义函数视为一个普通函数对象)

⑧    自定义函数(函数对象)由Function构造器创建

```

```

⑨	自定义函数 ==> 普通函数对象 向上查找原型即Function原型(构造函数Function的prorotype)

```
console.dir(Person.__proto__);
ƒ anonymous()
    apply: ƒ apply()
    arguments: (...)
    bind: ƒ bind()
    call: ƒ call()
    caller: (...)
    constructor: ƒ Function()
    length: 0
    name: ""
    toString: ƒ toString()
    Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
    get arguments: ƒ ()
    set arguments: ƒ ()
    get caller: ƒ ()
    set caller: ƒ ()
    [[FunctionLocation]]: ​
    [[Prototype]]: Object
    [[Scopes]]: Scopes[0]
```

⑩同⑥	Function原型即Function.prototype为Object对象,因此向上查找原型找到Object原型

```
console.dir(Person.__proto__.__proto__);
{
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: null
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
}
```

