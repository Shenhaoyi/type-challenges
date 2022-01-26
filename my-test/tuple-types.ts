// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// 元组类型

// 1、每个位置的元素的类型确定，一般来说，元组的长度也确定了，访问定义的下标会报错
type MyTuple = [string, number, 'shen']
const myTuple: MyTuple = ['xx', 1, 'shen', /* 1 多写或者写错类型都会报错 */]

// 2、可选，某个位置可以是undefined
type MyTuple2 = [string, number?, /* 'shen' 可选成员之后不能有其他必选成员 */]
const myTuple2: MyTuple2 = ['shen', undefined]


// 3、可以使用...剩余；这种情况元组的长度是不固定的
type StringBooleansNumber = [string, ...boolean[], number];
const aaa: StringBooleansNumber = ['shen', false, true, 1]

// 4、数组或者元组可以使用readonly将所有成员设置为只读
function xxxx(value: readonly [string, number]){
  let [a, b] = value;
  // value[0] = 'shen' 会报错
}

// 5、不带剩余操作符的元组length属性，是字面量类型
type length = MyTuple['length'] 
// 带剩余操作符则length是number，是可以变的
type length1 = StringBooleansNumber['length']
// 普通数组的长度是number，不固定
type array = string[]
type length2 = array['length']
