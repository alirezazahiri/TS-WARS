export class Kata {
  static squareDigits(num: number): number {
    
    // get a list of digits out of number
    const digits: string[] = [...`${num}`]
    
    // map the digits to their power of 2
    const result: string = digits.map(digit => `${Number(digit)**2}`).join("")
    
    // return the number
    return Number(result);
  }
}

import {assert} from "chai";

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(Kata.squareDigits(9119), 811181);
    assert.strictEqual(Kata.squareDigits(0), 0);
  });
});