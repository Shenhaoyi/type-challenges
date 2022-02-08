// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

// 关键词：三目操作符；infer

// 1、extends 判断是否符合约束
interface a { a: number }
interface b extends a {
  b: string
}
type c = b extends a ? string : number // 满足约束，所以为string

// 2、配合泛型解决函数需要重载的场景，即根据输入类型返回不同的输出类型
type GenericOverLoad<T extends number | string> = T extends number ? number : string
function overload<T extends number | string>(value: T): GenericOverLoad<T> {
  // return typeof value === 'number' ? value : String(value) // TODO:为什么这里报错
  throw "unimplemented";
}
const value = overload('2') // 返回什么东西？// 会直接抛出错误


// 3、传入类型错误处理，
// 3.1：输入类型约束
type Constraints<T extends { message: unknown }> = T['message']
type d = {
  key: string;
  message: string;
}
type e = Constraints<d>
type f = {
  key: string;
}
// type g = Constraints<f> 没有符合输入约束，就会提示错误
// 3.2：使用条件类型，如果不符合要求就返回一个兜底的类型
type Constraints2<T> = T extends { message: string } ? T['message'] : never
type h = Constraints2<f>// 返回兜底类型


// 4、与infer 操作符
// 在条件类型中推断匹配到的某个部分（extends前面的类型更加精确，后面的内容比较模糊，用infer代替模糊的部分，有点像结构赋值），比如数组成员类型、函数返回值类型
// 推断数组成员类型：数组类型扁平化
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
type flattenArray = Flatten<string[]>
type flattenArray2 = Flatten<string>
// 推断数组成员类型：获取数组第一个元素类型（与结构赋值的使用方式完全一样）
type MyFirst<T extends any[]> = T extends [infer P, ... infer Rest] ? P : never
type myFirst = MyFirst<[string, number, symbol]>
// 推断函数返回类型：获得函数类型的返回值
type GetReturnType<Type> = Type extends () => infer Return
  ? Return
  : never;
type MyReturnType1 = GetReturnType<()=>string>



// 5、分配条件类型：与联合类型，可以批量操作批量类型
// 这里的T对应联合类型中的每一项
type Constraints3<T> = T extends any ? T[] : never
type i = Constraints3<keyof d> // 联合类型批量变化
