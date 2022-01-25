// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

// 1、得到字符串联合类型
type Point = { x: number; y: number };
type KeyofPoint = keyof Point; // p 相当于 'x' | 'y' 这样的联合类型
const keyofPoint: KeyofPoint = 'y'

// 2、得到基础类型的联合类型
type Point2 = { [x2: string]: number; [y2: number]: number };
type KeyofPoint2 = keyof Point2; // p 相当于 string | number 这样的联合类型
const point2: KeyofPoint2 = 1


