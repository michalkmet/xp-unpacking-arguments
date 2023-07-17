# Awesome repo

You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story 1: User can pass in wrong inputs, it should throw an exception
- ✅ TODO UAT1.1: User can pass no function, it should throw an exception
- ✅ TODO UAT1.2: User can pass wrong function name (number), it should throw an exception

Story 2: User can pass in function name and arguments, it should return result of that function with the given arguments
- ✅ TODO UAT2.1: User can pass "function(){return true}" , it should return true 
- ✅ TODO UAT2.2: User can pass "function(x,y){return x+y}, [1,2]" , it should return 3
- ✅ TODO UAT2.3: User can pass "function(x,y,z){return x-y-z}, [10,1,2]" , it should return 7
- ✅ TODO UAT2.4: User can pass "function(x){return x}, 'hello world'" , it should return 'hello world'
- ⚠ TODO UAT2.5: User can pass "function(x,y,z,w){return x+y+z+w}",[1,2,3,4] , it should return 10