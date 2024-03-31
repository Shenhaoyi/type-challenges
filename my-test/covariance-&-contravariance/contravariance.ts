/*
  协变和逆变，其中返回值协变，参数逆变
    举例
      函数约束类型 C，函数实际类型 R
    入参类型
      Parameters<C> 是 Parameters<R> 的子集
    返回值类型
      ReturnType<C> 是 ReturnType<R> 的超集
*/

import { Fans, IKun, SuperIKun } from './common';
import { iKun } from './covariance';

type IKunTransform = (x: IKun) => IKun;
type SuperIKunTransform = (x: Fans) => SuperIKun;

const superIKunTransform: SuperIKunTransform = (x) => {
  return {
    ...x,
    dance() {},
    sing() {},
    basketball() {},
    rap() {},
  };
};

/*
  分析
    IKunTransform
      限制了 iKunTransform 函数的输入需要满足 IKun
        因为，输入实际是 iKunTransform 在输入
      限制了 superIKunTransform 函数的初始需要满足 IKun
        因为，最终由 superIKunTransform 提供输出
  协变和逆变
    入参
      给的是 IKunTransform
      收的是 SuperIKunTransform
      类型安全保证
        Parameters<IKunTransform> 是 Parameters<SuperIKunTransform> 的子集/父类
    返回
      给的是 SuperIKunTransform
      收的是 IKunTransform
      类型安全保证
        ReturnType<SuperIKunTransform> 是 Parameters<IKunTransform> 的子集/父类
*/
const iKunTransform: IKunTransform = superIKunTransform;
const result = iKunTransform(iKun);
