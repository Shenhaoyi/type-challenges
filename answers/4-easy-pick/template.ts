// 取部分属性为一个新类型
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
// 步骤：
// 1、返回对象 {}
// 2、遍历key in
// 3、匹配key extends keyof
// 4、复制对应类型 T[Key]
