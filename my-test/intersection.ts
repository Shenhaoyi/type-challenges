// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#intersections

// 交叉交叉，将两种类型进行合并，去掉不同类型
type MyIntersection = { a: string } & { b: boolean }
const d: MyIntersection = {
  a: '1',
  b: true,
}
// 如果两种类型冲突的话，好像两种类型都没法通过类型检测
type ConflictMyUnionType = string & { a: boolean }
// const e: ConflictMyUnionType = 'string'
// const e: ConflictMyUnionType = {
//   a: true
// }

// 不同类型合并不了的话结果never
type ConflictMyUnionType2 = string & number // 是never

// 不同类型合并，有交集会保留交集？看结果好像是的
type MyUnionForIntersection = 'a' | 'b'
type MyIntersection2 = MyUnionForIntersection & 'a';
