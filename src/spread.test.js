const spread = require('./spread');

describe('hello', () => {
  it('should return hello', () => {
    expect(spread()).toBe('hello');
  });
});
