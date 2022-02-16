type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest}` | `${infer Rest}${' ' | '\t' | '\n'}` ? Trim<Rest> : S
// 注意：如果只写一个模板，那么必须左右都匹配到才会去除
// 或者改成使用2个条件，先左trim再右trim
