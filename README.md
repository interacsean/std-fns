# std-fns
Standard Functions is a library aimed to fill in the gaps in the JS standard library. The library follows, or aims to follow, functional programming methodologies. Even though stable it is not very useful at the moment, so use at your own risk.

## Fns
- @core/partial: Partially apply arguments to a function from left to right.
- @core/partialRight: Partially apply arguments to a function from right to left.
- @core/identity: Pass a value to a function which returns said value.
- @async/bimap: Map over the success or error of a promise.
- @async/fmap: Map over the value of a promise. The function provided should return another Promise.
- @async/lmap: Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.
- @async/map: Map over the value of a promise. The map function will only be called if the promise is resolved.
- @async/tap: Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.

## Todo
- Add more function.
- Add data structures.
- Add algebraic types.
- Add Flow library definition to the flow-typed project.
