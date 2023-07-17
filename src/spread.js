function spread(wholeFunction, args) {
  if (!wholeFunction || typeof wholeFunction != 'string') {
    throw new Error('missing Function!');
  }

  console.log('args: ', args);
  const functionBody = wholeFunction.split(')')[1];
  console.log('functionBody: ', functionBody);
  if (args) {
    const x = args[0] ? args[0] : 0;
    const y = args[1] ? args[1] : 0;
    const z = args[2] ? args[2] : 0;
    console.log('x: ', x);
    console.log('y: ', y);
    console.log('z: ', z);
    let dynamicFunction = new Function('x', 'y', 'z', functionBody);
    console.log('dynamicFunction: ', functionBody);
    return dynamicFunction(x, y, z);
  } else {
    let dynamicFunctionWithouArgs = new Function(functionBody);
    return dynamicFunctionWithouArgs();
  }
}

module.exports = spread;
