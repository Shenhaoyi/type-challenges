// 三目运算符泛型版
type If<C extends boolean, T, F> = C extends true ? T : F
