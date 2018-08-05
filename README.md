# std-fns
Standard Functions is a library aimed to fill in the gaps in the JS standard library. The library follows, or aims to follow, functional programming methodologies. Even though stable it is not very useful at the moment, so use at your own risk.

## Fns
- @core/compose: Compose a function from all functions passed as arguments from left to right.
- @core/composeRight: Compose a function from all functions passed as arguments from right to left.
- @core/curry: Curry a function taking arguments from left to right. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.
- @core/curryRight: Curry a function taking arguments from right to left. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.
- @core/partial: Partially apply arguments to a function from left to right.
- @core/partialRight: Partially apply arguments to a function from right to left.
- @core/identity: Pass a value to a function which returns said value.
- @async/bimap: Map over the success or error of a promise.
- @async/fmap: Map over the value of a promise. The function provided should return another Promise.
- @async/lmap: Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.
- @async/map: Map over the value of a promise. The map function will only be called if the promise is resolved.
- @async/tap: Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.
- @numbers/dec: Decrement a number by one.
- @numbers/inc: Increment a number by one.
- @numbers/subtract: Subtract all numbers passed into the function. It will subtract from left to right, first argument minus the second and then the product minus the next argument and so on.
- @numbers/sum: Sum all numbers passed into the function. It will sum from left to right, first argument plus the second and then the product plus the next argument and so on.

## Todo
- Add more function.
- Add data structures.
- Add algebraic types.
- Add Flow library definition to the flow-typed project.
