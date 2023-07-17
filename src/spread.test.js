const spread = require('./spread');

describe('Story 1', () => {
  it('UAT1.1: User can pass no function, it should throw an exception', () => {
    expect(() => spread()).toThrow();
  });
  it('UAT1.2: User can pass wrong function name (number), it should throw an exception', () => {
    expect(() => spread(6)).toThrow();
  });
});

describe('Story 2', () => {
  it('UAT2.1: User can pass "function(){return true}" , it should return true', () => {
    expect(spread('function(){return true}')).toBe(true);
  });
  it('UAT2.2: User can pass "function(x,y){return x+y}, [1,2]" , it should return 3', () => {
    expect(spread('function(x,y){return x+y}', [1, 2])).toBe(3);
  });
});
