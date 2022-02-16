// 首字母大
type Capitalize1<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : '';

// 解题步骤
// 准备一个字母表 =》可以使用工具泛型Uppercase
// 匹配小写的首字母 =》 直接匹配第一个即可 疑问：使用infer 怎么知道是匹配首字母？答：上面这种方式直接匹配到的就是首字母
// 使用字母表进行替换 =》 直接转换 
