type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' 
? S
: S extends `${infer I}${From}${infer J}` 
? `${ReplaceAll<`${I}`, From, To>}${To}${ReplaceAll<`${J}`, From, To>}`
  : S


// 解题步骤：
// 递归替换即可=>需要将未匹配部分进行递归，不希望出现将替换晚的结果再替换的情况
// from 为空的情况处理
