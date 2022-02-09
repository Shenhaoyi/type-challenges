// 泛型

// 泛型参数默认值
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults
// 如果参数有默认值，则被认为是可选的
// 如果参数有约束，则默认参数必须满足约束
declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): any;

// 泛型至少有一个参数
type MyGeneric1<> = string; // 没有参数的泛型就是普通类型
// type MyGeneric2 = MyGeneric1<> // 泛型至少有一个参数
