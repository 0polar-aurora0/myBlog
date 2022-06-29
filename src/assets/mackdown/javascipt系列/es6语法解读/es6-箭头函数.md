## es6箭头函数

[官网介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

1. 什么是箭头函数

2. 箭头函数语法

   ```javascript
   (param1, param2, …, paramN) => { statements }
   (param1, param2, …, paramN) => expression
   //相当于：(param1, param2, …, paramN) =>{ return expression; }
   
   // 当只有一个参数时，圆括号是可选的：
   (singleParam) => { statements }
   singleParam => { statements }
   
   // 没有参数的函数应该写成一对圆括号。
   () => { statements }
   ```

3. 箭头函数的特点

   - 作用域
   - 

> **箭头函数表达式**的语法比[函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)更简洁，并且没有自己的`this`，`arguments`，`super`或`new.target`。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

