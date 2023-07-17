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
- ⚠ TODO UAT2.1: User can pass "function(){return true}" , it should return true 
