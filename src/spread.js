function spread(wholeFunction, args) {
  if (!wholeFunction || typeof wholeFunction != 'string') {
    throw new Error('missing Function!');
  }

  console.log('args: ', args);
  const functionBody = wholeFunction.split(')')[1];
  console.log('functionBody: ', functionBody);
  if (args) {
    const [x, y] = args;
    console.log('x: ', x);
    console.log('y: ', y);
    const z = args[2] ? args[2] : 0;
    let dynamicFunction = new Function('x', 'y', 'z', functionBody);
    console.log('dynamicFunction: ', functionBody);
    return dynamicFunction(x, y, z);
  } else {
    let dynamicFunctionWithouArgs = new Function(functionBody);
    return dynamicFunctionWithouArgs();
  }
}

module.exports = spread;
