const n1 = 0,  n2 = n1, 
      n3 = 20,  n4 = 9, 
      n5 = 11, n6 = n4, 
      n7 = 8, n8 = 3.14

const result = (n1 / n2 + n4- n3) * n5 * n8 / (n6 - n7)
console.log(result)  // ???

const convertUsdToKrw = (x, y) => parseFloat(x) * parseFloat(y) + '원'
console.log(convertUsdToKrw(120.50, 1480));
console.log( convertUsdToKrw('120.50', '1480'))
console.log( convertUsdToKrw('120.50달러','1480원'))