type Pop<T extends any[]> = T extends [...infer Rest, infer K] ? Rest : never;
