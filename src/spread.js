function spread(wholeFunction, args) {
  if (!wholeFunction || typeof wholeFunction != 'string') {
    throw new Error('missing Function!');
  }
  wholeFunction = wholeFunction.toString();
  const functionBody = wholeFunction.split(')')[1];
  if (args) {
    const x = args[0] ? args[0] : 0;
    const y = args[1] ? args[1] : 0;
    const z = args[2] ? args[2] : 0;
    const w = args[3] ? args[3] : 0;
    let dynamicFunction = new Function('x', 'y', 'z','w', functionBody);
    return dynamicFunction(x, y, z, w);
  } else {
    let dynamicFunctionWithouArgs = new Function(functionBody);
    return dynamicFunctionWithouArgs();
  }
}

module.exports = spread;
