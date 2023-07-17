# Notes

You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ Initial refactor, function names, file names
- ✅ User Stories 
- ✅ UAT1.1: User can pass no function, it should throw an exception
- ✅ UAT1.2: User can pass wrong function name (number), it should throw an exception
- ✅ UAT2.1: User can pass "function(){return true}" , it should return true 
- 🚧 TODO UAT2.2: User can pass "'function(x,y){return x+y}', [1,2]" , it should return 3

Pomodoro 2:
- ✅ UAT2.2: User can pass "'function(x,y){return x+y}', [1,2]" , it should return 3
- 🚧 TODO UAT2.3: User can pass "function(x,y,z){return x-y-z}, [10,1,2]" , it should return 7

Pomodoro 3:
- ✅ UAT2.2: User can pass "'function(x,y){return x+y}', [1,2]" , it should return 3
- ✅ UAT2.3: User can pass "function(x,y,z){return x-y-z}, [10,1,2]" , it should return 7
- ✅  TODO UAT2.4: User can pass "function(x){return x}, 'hello world'" , it should return 'hello world'

Pomodoro 4:
- ✅ Refactor
- ✅ added to string method
- ✅ UAT2.5: User can pass "function(x,y,z,w){return x+y+z+w}",[1,2,3,4] , it should return 10

Pomodoro 5:
- ✅ Refactor - apply function ()