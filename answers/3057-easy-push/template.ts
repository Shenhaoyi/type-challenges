// type Push<T, U> = any

// 解题步骤：
// 返回元祖类型
// 将T展开，并与U组合

// 使用...
type Push<T extends unknown[], U> = [...T, U]
