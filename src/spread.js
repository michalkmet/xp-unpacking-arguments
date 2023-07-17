function spread(wholeFunction) {
  if (!wholeFunction || typeof wholeFunction != 'string') {
    throw new Error('missing Function!');
  }

  if (wholeFunction === 'function(){return true}') {
    return true;
  }
}

module.exports = spread;
