// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions

// 联合类型（可以当做枚举类型使用），也能直接将一个字符串作为一种类型
export type MyUnionType = 'title' | 'completed' | 'invalid'
const a: MyUnionType = 'title'

// 从对象类型中keyof操作也能得到联合类型，具体见keyof文件


// 从联合类型中取值 in
type MyObjectOfMyUnionType = {
  [key in MyUnionType]: string
}
const b: MyObjectOfMyUnionType = {
  title: '1',
  completed: '2',
  invalid: '3'
}


// 联合或
type MyUnionOr = string | undefined
const c: MyUnionOr = '2'

// 字面量类型与普通类型组合的联合类型 见：
// combine these with non-literal types:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
type MyUnionMixture = 'shen' | number
const myUnionMixture: MyUnionMixture = 1 // 字符串只能写'shen'，数字则随意

// boolean 类型其实就是  true | false 的字面量联合类型
