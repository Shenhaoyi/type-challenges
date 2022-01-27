type MyExclude<T, U> = T extends U ? never : T;
  

// 步骤：
// 遍历U in
// 遍历T，并从T中过滤掉 element of U

// 知识点为分配条件类型
