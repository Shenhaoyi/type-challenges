type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Params) => any ? Params: never

// 解题步骤：
// 返回数组
// 使用infer 获取函数的入参
// 

type fun1 = (...args: any[]) => any

// 为什么参数名需要列出来？就跟对象的键名一样！或者像上面一样使用数组形式，只需要数组的名字就行
