type Length<T extends readonly any[]> = T['length']

// 整个类型只能更宽松，但是只读已经限制住了（只读或不只读只能选其一），所以必须写上readonly
