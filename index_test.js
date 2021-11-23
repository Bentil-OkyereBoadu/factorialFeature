var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if the output is 120',() => {
      //setup
      const number = 5;
      const expected = 120;

      //exercise
      const actual = Calculate.factorial(number);
      
      //verify
      assert.equal(actual, expected);
    });
    it('tests if the output is 6',() => {
      //setup
      const number = 3;
      const expected = 6;

      //exercise
      const actual = Calculate.factorial(number);

      //verify
      assert.equal(actual, expected);
    });
    it('test if 0! is 1', () => {
      //setup
      const number = 0;
      const expected = 1;

      //exercise
      const actual = Calculate.factorial(number);

      //verify
      assert.equal(actual, expected);
    });
  });
});
