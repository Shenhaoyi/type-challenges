// 1、直接使用[]匹配
// type First<T extends any[]> = T extends [] ? never :T[0]
// 2、length属性
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 3、访问数组的值，利用空数组使用0访问和使用number访问返回的类型不同的特点
// type First<T extends any[]> = T[0] extends T[number] ? T[0]: never
// 4、infer进行推断
type First<T extends any[]> = T extends [infer P, ... infer Rest] ? P: never


// 通过number访问值类型能访问所有成员，那么通过字面量类型就能访问特定的成员了
// 数组为空的情况处理

// 访问到空的成员，返回的类型为undefined
// type First<T extends any[]> = T[0]
type FirstOFEmptyArray = First<[]>
