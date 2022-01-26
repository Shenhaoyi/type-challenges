// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 以类型作为索引获得属性的类型，有点像是通过类型进行筛选，并获得联合类型
// 关键字：获取对象键与遍历对象值对比；获取数组类型各属性类型

// 1、对象通过属性的key作为字面量类型进行访问
// 1.1、直接用获取对象属性的方式获取类型的属性类型
type Person = {
  name: string;
  age: number;
}

type Name = Person['name'] // 悬浮上去可以看到就是string【注意，这里的字符串不能使用变量，因为这是字面量类型】

// 1.2、使用联合类型获得原始类型的联合类型（没什么用）
type IndexedType1 = Person['name' | 'age'] // 可以看到 是string | number


// 2、通过number访问数组类型
const array = [1, 'shen']
type IndexedType2 = (typeof array)[number]

// 获取键类型 需要使用keyof
type Union1 = keyof Person // 这里无法看到，其实就是联合类型
const a: Union1 = 'age'
// 获取值类型 需要通过index筛选出来符合类型的key对应的value的类型
type Union2 = IndexedType1
const b: Union2 = 1;
