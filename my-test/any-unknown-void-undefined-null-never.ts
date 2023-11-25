// 参考资料 https://juejin.cn/post/6872111128135073806#heading-19

// 1、any：任何类型都能被归为any，将有其他类型的变量赋值一个any类型变量的值，不会报错
// 2、unknown: 也可以将任何类型赋值给unknown，将有其他类型的变量赋值一个unknown类型变量的值，会报错

const any: any = 1;
const unknown: unknown = 2;
const obj = {
  c: '2',
};
obj.c = any;
// obj.c = unknown; 这里就会报错

// 3、void 表示没有任何类型，比如函数没有任何返回值
const myVoid = function (): void {
  console.log('xx');
  // return '' // 如果返回内容会报错
};

// 4、undefined 和 null 只能取自己本身，可以看做是字面量

// 5、never: 会抛出错误，或者永远不会有返回值的函数（比如死循环）
function test(): never {
  // throw(new Error('dying'))
  while (true) {}
}
