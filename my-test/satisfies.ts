type Colors = 'red' | 'green';
type RGB = [red: number, green: number, blue: number];

const palette1 = {
  red: [255, 0, 0],
  green: '#00ff00',
};
/*
  推导出的类型:
  const palette: {
    red: number[];
    green: string;
  };
*/

const palette2: Record<Colors, RGB | string> = {
  red: [255, 0, 0],
  green: '#00ff00',
};
// 不做类型推导，只是单纯进行校验，类型就是 Record<Colors, RGB | string>

const palette3 = {
  red: [255, 0, 0],
  green: '#00ff00',
} as const;
// 这种写法没有类型检查

const palette4 = {
  red: [255, 0, 0],
  green: '#00ff00',
} satisfies Record<Colors, RGB | string>;
/*
  类型检查+推导，推导出的类型:
  const palette: {
    red: [number, number, number];
    green: string;
  };
*/
