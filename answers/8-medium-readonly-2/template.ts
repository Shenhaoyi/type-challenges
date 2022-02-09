// type MyReadonly2<T, K> = any

// 解题步骤：
// 返回对象
// 条件判断，K是否存在（如何判断？）
// 如何有条件的设置属性的readonly？


// K是否存在的判断
type MyExit<K> = K extends never ? true : false
// type test123 = MyExit<> // 输入不做约束，这里会直接提示错误
// 没法判断，可以使用参数默认类型
type MyExit2<T extends object, K extends keyof T = keyof T> = K;
type test321 = MyExit2<{ a: string }>


// 1、尝试使用递归，没有数组怎么依次infer？

// 2、尝试使用属性覆盖 两者没法同时存在
// type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
//   [key in keyof T]: T[key];
//   +readonly [key in K]: T[key];
// }

// 3、判断K是否包含T的所有属性，还是没有避免掉上面的问题
// type MyReadonly2<T extends object, K extends keyof T = keyof T> = Equal<K, keyof T> ? any : any;

// 4、将两个集合取差集，分别形成对象并进行联合
type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
  +readonly [key in K]: T[key];
} & {
    [key in MyExclude<keyof T, K>]: T[key];
  } // 第二部分也可以使用Omit<T, K> 来简化
