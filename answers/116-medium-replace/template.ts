type Replace<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer I}${From}${infer J}`
  ? `${I}${To}${J}`
  : S;

  // '' 是字面量，不是代表string
type testString = '123' extends '' ? true : false;
