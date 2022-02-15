// 根据联合类型各成员的type查找
type LookUp<Union, Type extends string> = Union extends { type: Type } ? Union : never;
