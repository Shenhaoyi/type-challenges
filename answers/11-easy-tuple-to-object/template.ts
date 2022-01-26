type TupleToObject<T extends readonly (string|number|symbol)[]> = {
  [key in T[number]]: key
}


// 步骤
// 返回对象
// 遍历
// key与value相同
// 限制数组成员类型，因为对象的键的类型只能是字符串，其他的类型会自动转成字符串，这里为了通过测试用例，只需要将对象和数组排除在外即可
