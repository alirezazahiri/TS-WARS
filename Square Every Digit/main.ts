const squareDigits = (num: number): number => {
  
  // get a list of digits out of number
  const digits: string[] = [...`${num}`]
  
  // map the digits to their power of 2
  const result: string = digits.map(digit => `${Number(digit)**2}`).join("")
  
  // return the number
  return Number(result);
}