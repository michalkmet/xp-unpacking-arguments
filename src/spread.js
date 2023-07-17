function spread(wholeFunction, args) {
  if (!wholeFunction || typeof wholeFunction != 'function') {
    throw new Error('missing Function!');
  }
  
  const result = wholeFunction.apply(null, args);
  return result;
}

module.exports = spread;
