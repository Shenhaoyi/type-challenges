type DeepReadonly<T extends object> = {
  +readonly [key in keyof T]: T[key] extends object
    ? T[key] extends () => unknown // Function
      ? T[key]
      : DeepReadonly<T[key]>
    : T[key];
};
// 判断是否有属性的方式 keyof T[key] extends never
// type DeepReadonly2<T> = {
//   +readonly [key in keyof T]: keyof T[key] extends never
//   ? T[key]
//   : DeepReadonly<T[key]> // 这里的类型检测不通过，判断不了是否为object
// }

// 函数属于对象
type IsFunctionExtendsObject = (() => unknown) extends Object ? true : false;
