import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('name', 'type-challenges') // 为什么name是字面量类型
  .option('bar', { value: 'Hello World' })
  .option('foo', 123)
  .get()

type cases = [
  Expect<Alike<typeof result, Expected>>
]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}
