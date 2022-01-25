type MyReadonly<T> = {
  +readonly [key in keyof T]: T[key]
}


// 步骤拆解：
// 1、返回对象类型
// 2、遍历并定义对应属性类型，并设置readonly
// 3、属性还是对象的情况
