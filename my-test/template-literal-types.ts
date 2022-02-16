// 模板字面量类型
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

// 进行字面量拼接
type World = "world"
type HelloWorld1 = `Hello ${World}`

// 与字面量联合类型，能分配！(多个联合类型作为变量放在一起会进行组合，会自动进行全组合)
type TestWorld = "test" | "world"
type TestWorld2 = `${TestWorld}_id`

// infer & extends 将模板字面量类型与条件类型结合进行类型推断
// https://davidtimms.github.io/programming-languages/typescript/2020/11/20/exploring-template-literal-types-in-typescript-4.1.html
// 匹配字符串中的部分内容，匹配的边缘需要有明确的特征
type ExtractVerb<S extends string> = S extends `${infer Verb} ${infer Activity}` ? Verb : never;
type TestExtractVerb = ExtractVerb<'shen haoyi'>
// 字符串如果没有明确的特征, 会直接匹配到第一个字符？（测试结果，未找到出处）
type FirstLetter<S extends string> = S extends `${infer First}${infer Rest}` ? First : never;
type TestFirstLetter = FirstLetter<'shenhaoyi'>

// 文档没有看完，只看了前言部分
