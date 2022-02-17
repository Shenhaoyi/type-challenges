// https://juejin.cn/post/6872111128135073806#heading-52
// ts 的函数可以重载: 参数名称，参数或者返回值的类型不同即可重载
// js中的参数都是可选的，ts中的参数有必选或可选之分


type myFunc = (...args: any[]) => any
// 为什么参数名需要列出来？就跟对象的键名一样！或者像上面一样使用数组形式，只需要数组的名字就行

type myFunc1 = (...args: [string, any]) => any // 注意这里给了输入参数的默认名

// 191题
// 注意：上面的args只是一个象征，实际的参数的名称与类型是看冒号后面的
type ReturnInput<Fn extends Function> = Fn extends (...args: infer arguments) => (infer ReturnType1) // 返回函数输入类型
  ? arguments
  : never
type Fn1 = (a: number, b: string, x: boolean) => number
type Args1 = ReturnInput<Fn1> // 为什么函数的输入参数像对象一样，下标是参数的名称字面量
// type Args2 = Args1['x'] // 为什么直接通过index会报错
type Args3 = Args1[number] // 可是下标好像不是number啊？
