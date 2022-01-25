// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

// 1、直接用获取对象属性的方式获取类型的属性类型
type Person = {
  name: string;
  age: number;
}

type Name = Person['name'] // 悬浮上去可以看到就是string【注意，这里的字符串不能使用变量】

// 2、使用联合类型获得原始类型的联合类型（没什么用）
type IndexedType1 = Person['name' | 'age'] // 可以看到 是string | number


// 另外的内容见keyof文件中
