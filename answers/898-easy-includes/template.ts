// 访问数据成员成型（number），得到联合类型
// readonly检测
// 对象成员检测
// 只能保证类型是符合约束的，无法保证一模一样
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false


// 需要用到equal泛型
// 使用infer依次获得元素，使用equal进行判断，然后低贵族执行
type MyEqual<T, U> = (<X>() => X extends T ? 1 : 2) extends (<X>() => X extends U ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Y]
  ? MyEqual<X, U> extends true
    ? true
    : Includes<Y, U>
  : false;
