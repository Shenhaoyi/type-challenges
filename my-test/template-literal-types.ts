// 模板字面量类型
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

// 进行字面量拼接
type World = "world"
type HelloWorld1 = `Hello ${World}`

// 与字面量联合类型，能分配！(多个联合类型作为变量放在一起会进行组合，会自动进行全组合)
type TestWorld = "test" | "world"
type TestWorld2 = `${TestWorld}_id`


// 文档没有看完，只看了前言部分
