type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimLeft<Rest> : S;


// 解题步骤
// 字符串应该不能遍历，需要使用模板字面量类型进行infer，并进行递归调用
// 终止条件是匹配到的内容不是空，如何判断\n等？，作为字面量类型进行判断即可，需要将各种需要替换的内容进行联合
