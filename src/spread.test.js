const spread = require('./spread');

describe('Story 1', () => {
  it('UAT1.1: User can pass no function, it should throw an exception', () => {
    expect(() => spread()).toThrow();
  });
  it('UAT1.2: User can pass wrong function name (number), it should throw an exception', () => {
    expect(() => spread(6)).toThrow();
  });
});
