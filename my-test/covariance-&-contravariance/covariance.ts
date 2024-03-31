/*
  协变
    给
      超集/子类型
    收
      子集/父类型
*/
import { Fans, IKun, SuperIKun } from './common';

const fans: Fans = {
  call() {},
};
const superIKun: SuperIKun = {
  call() {},
  dance() {},
  sing() {},
  basketball() {},
  rap() {},
};

/*
  类型安全
    IKun 是 SuperIKun 的子集（父类），能保证这个对象中 IKun 类型的方法都是可用的
*/
export const iKun: IKun = superIKun;

/*
  类型不安全
    IKun 是 Fans 的超集（子类），不能保证这个对象中 IKun 类型的方法都是可用的
*/
// @ts-expect-error
const iKun2: IKun = fans;
