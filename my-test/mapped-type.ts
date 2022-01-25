// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

// 用于在属性的类型没有或者无法事先定义的情况

// 1、指定该对象的属性必须是string类型，
type MappedType = {
  // name: boolean; 会提示错误，这个类型的所有属性都必须是string，除非将下面的类型进行放宽，比如写成any
  [key: string]: string;
}
const mappedType: MappedType = {
  // test: true, 会报错
  a: '1'
}


// 2、遍历联合类型
type Object1OfMappedType2 = {
  readonly a: string;
  b?: boolean;
}
type MappedType2 = {
  [key in keyof Object1OfMappedType2]: string;
}
const mappedType2: MappedType2 = {
  a: 'string',
  b: 'string',
}

type UnionTypeOfMappedType2 = 'c' | 'd'
type MappedType3 = {
  [key in UnionTypeOfMappedType2]: boolean;
}
const mappedType3: MappedType3 = {
  c: true,
  d: false,
}

// 3、泛型类型？有点像函数
// 调用的时候传入具体的类型然后产生实际的类型。
type OptionsFlags<Type> = {
  [Property in keyof Type]: string;
};
type MappedType4 = OptionsFlags<Object1OfMappedType2>
const mappedType4: MappedType4 = {
  a: 'string',
  b: 'string',
}

// 4、映射时进行修改。readonly和optional会与操作的类型一致。可以通过 +-号来修改属性
// 4.1、readonly
type MappedType5 = {
  [key in keyof Object1OfMappedType2]: string;
}
const mappedType5: MappedType5 = {
  a: 'string',
  b: 'string',
}
// mappedType5.a = 3; 会报错

type MappedType6 = {
  -readonly [key in keyof Object1OfMappedType2]: string;
}
const mappedType6: MappedType6 = {
  a: 'string',
  // b: 'string', 
}
mappedType6.a = '3' // 去掉readonly之后就能

// 4.2、是否可选，-表示必选，+表示可选
type MappedType7 = {
  [key in keyof Object1OfMappedType2]-?: string;
}
const mappedType7: MappedType7 = {
  a: 'string',
  b: 'string', 
}

