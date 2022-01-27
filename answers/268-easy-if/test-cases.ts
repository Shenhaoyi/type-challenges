import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
// TODO: 无法检测null的情况
type error = If<null, 'a', 'b'>

// null 属于真值
type TT = null extends true ? 1 : 2
