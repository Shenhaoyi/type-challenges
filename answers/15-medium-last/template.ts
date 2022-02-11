type Last<T extends any[]> = T extends [...infer K, infer Last] ? Last : never;
