type Chainable<T extends {} = {}> = { // T 就是保存的对象类型
  option<K extends string, V>(key: K, value: V): 
    Chainable<T & {
      [key in K]: V
    }>;
  get(): T
}


// 解题步骤：
// option返回的一定是Chainable
// 链式调用的过程中，如何将类型保存起来，使用泛型传（需要使用一个初始的默认值）
// 注意 key的类型必须是字面量类型
