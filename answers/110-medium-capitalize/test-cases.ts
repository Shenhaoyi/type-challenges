import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Capitalize1<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize1<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize1<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize1<''>, ''>>,
  Expect<Equal<Capitalize1<'a'>, 'A'>>,
  Expect<Equal<Capitalize1<'b'>, 'B'>>,
  Expect<Equal<Capitalize1<'c'>, 'C'>>,
  Expect<Equal<Capitalize1<'d'>, 'D'>>,
  Expect<Equal<Capitalize1<'e'>, 'E'>>,
  Expect<Equal<Capitalize1<'f'>, 'F'>>,
  Expect<Equal<Capitalize1<'g'>, 'G'>>,
  Expect<Equal<Capitalize1<'h'>, 'H'>>,
  Expect<Equal<Capitalize1<'i'>, 'I'>>,
  Expect<Equal<Capitalize1<'j'>, 'J'>>,
  Expect<Equal<Capitalize1<'k'>, 'K'>>,
  Expect<Equal<Capitalize1<'l'>, 'L'>>,
  Expect<Equal<Capitalize1<'m'>, 'M'>>,
  Expect<Equal<Capitalize1<'n'>, 'N'>>,
  Expect<Equal<Capitalize1<'o'>, 'O'>>,
  Expect<Equal<Capitalize1<'p'>, 'P'>>,
  Expect<Equal<Capitalize1<'q'>, 'Q'>>,
  Expect<Equal<Capitalize1<'r'>, 'R'>>,
  Expect<Equal<Capitalize1<'s'>, 'S'>>,
  Expect<Equal<Capitalize1<'t'>, 'T'>>,
  Expect<Equal<Capitalize1<'u'>, 'U'>>,
  Expect<Equal<Capitalize1<'v'>, 'V'>>,
  Expect<Equal<Capitalize1<'w'>, 'W'>>,
  Expect<Equal<Capitalize1<'x'>, 'X'>>,
  Expect<Equal<Capitalize1<'y'>, 'Y'>>,
  Expect<Equal<Capitalize1<'z'>, 'Z'>>,
]