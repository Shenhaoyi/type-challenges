// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// 字面量类型
// 关键字 const; as const

// 针对js中的const，使用const定义的变量就是常量了，无法修改
let literal1 = 'xxx'
const literal2 = 'yyy'
type Literal1 = typeof literal1 // 可以被修改为任意字符串，所以类型就是string
type Literal2 = typeof literal2 // 常量，被固定位特定字符串的string类型，就变成了字面量类型


// 总结：使用const定义的简单变量，其类型就是字面量类型

// 一般来说这种类型没有什么用，没事把string类型定义成只能设置为特定字符串好像没有什么用，直接 const 就能实现了
// 唯一的用途就是用来组成联合类型，比如约束函数的输入参数只能在某几个值中取，像枚举类型一样
function test(value: 1 | 2) {
  console.log('value:', value);
}
test(1) // 参数只能传1或者2


// literal interface
// 如果是对复杂类型进行，比如对象，其键会被约束住，而值只是一个普通类型。因为对象的属性是可以变化的
const literal3 = { a: 2 }
type Literal3 = typeof literal3
const literal4: Literal3 = {
  a: 3
}
// 如果想将对象的属性变成只读，可以使用 【as const】
const literal5 = { a: 1 } as const
type Literal4 = typeof literal5

// 如果函数的参数只能从联合类型中取，而传入的参数是对象的属性，则需要对类型进行处理
// test(literal3.a) 会报错，有两种解决方式：
test(literal3.a as 1 | 2) // 1、进行断言
test(literal5.a) // 2、将整个对象的类型变成只读类型

