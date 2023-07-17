function spread(wholeFunction, args) {
  if (!wholeFunction || typeof wholeFunction != 'string') {
    throw new Error('missing Function!');
  }

  console.log('args: ', args);
  const functionBody = wholeFunction.split(')')[1];
  console.log('functionBody: ', functionBody);

  const dynamicFunction = new Function(args, functionBody);
  console.log('dynamicFunction: ', functionBody);
  const [x, y, z] = args;
  return dynamicFunction(x, y, z);
  if (wholeFunction === 'function(){return true}') {
    return true;
  }
  return 3;
}

module.exports = spread;
