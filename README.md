# std-fns
Standard Functions is a library aimed to fill in the gaps in the JS standard library. The library follows, or aims to follow, functional programming methodologies. Even though stable it is not very useful at the moment, so use at your own risk.

## Fns
- @core/partial: Partially apply arguments to a function from left to right.
- @core/partialRight: Partially apply arguments to a function from right to left.
- @async/map: Map over the value of a promise. The map function will only be called if the promise is resolved.
- @async/bimap: Map over the success or error of a promise.
- @async/tap: Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.

## Todo
- Add Flow js and types.
- Add more function.
- Add data structures.
- Add algebraic types.
