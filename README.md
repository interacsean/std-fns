# std-fns
Standard Functions is a library aimed to fill in the gaps in the JS standard library. The library follows, or aims to follow, functional programming methodologies. Even though stable it is not very useful at the moment, so use at your own risk.

## Documentation

## Functions

<dl>
<dt><a href="#bimap">bimap(leftFn, rightFn, p)</a> ⇒ <code>Promise.&lt;(R|never)&gt;</code></dt>
<dd><p>Map over the success or error of a promise.</p>
</dd>
<dt><a href="#fmap">fmap(fn, p)</a> ⇒ <code>Promise.&lt;(T|never)&gt;</code></dt>
<dd><p>Map over the value of a promise. The function provided should return another Promise.</p>
</dd>
<dt><a href="#lmap">lmap(fn, p)</a> ⇒ <code>Promise.&lt;(T|never)&gt;</code></dt>
<dd><p>Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.</p>
</dd>
<dt><a href="#map">map(fn, p)</a> ⇒ <code>Promise.&lt;(T|never)&gt;</code></dt>
<dd><p>Map over the value of a promise. The map function will only be called if the promise is resolved.</p>
</dd>
<dt><a href="#tap">tap(fn, p)</a> ⇒ <code>Promise.&lt;T&gt;</code></dt>
<dd><p>Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.</p>
</dd>
<dt><a href="#always">always(val)</a> ⇒ <code>function</code></dt>
<dd><p>Creates a function which always returns the same value.</p>
</dd>
<dt><a href="#and">and(...args)</a> ⇒ <code>*</code></dt>
<dd><p>Evaluates all arguments passed and returns the first falsey or last truthy value. It works like &amp;&amp; operator.</p>
</dd>
<dt><a href="#compose">compose(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Compose a function from all functions passed as arguments from left to right.</p>
</dd>
<dt><a href="#composeRight">composeRight(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Compose a function from all functions passed as arguments from right to left.</p>
</dd>
<dt><a href="#curry">curry(fn, ...initialArgs)</a> ⇒ <code>function</code></dt>
<dd><p>Curry a function taking arguments from left to right. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.</p>
</dd>
<dt><a href="#curryRight">curryRight(fn, ...initialArgs)</a> ⇒ <code>function</code></dt>
<dd><p>Curry a function taking arguments from right to left. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.</p>
</dd>
<dt><a href="#identity">identity(val)</a> ⇒ <code>T</code></dt>
<dd><p>Pass a value to a function which returns said value.</p>
</dd>
<dt><a href="#inst">inst(methodName, val)</a> ⇒ <code>any</code> | <code>null</code></dt>
<dd><p>Call instance method of an object.</p>
</dd>
<dt><a href="#negate">negate(fn)</a> ⇒ <code>function</code></dt>
<dd><p>Creates a function which negates the value of the result.
Works like the ! operator on the result of the function provided</p>
</dd>
<dt><a href="#not">not(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Negates a argument to a boolean value like the ! operator.</p>
</dd>
<dt><a href="#or">or(...args)</a> ⇒ <code>*</code></dt>
<dd><p>Evaluates all arguments passed and returns the first truthy or last falsey value. It works like || operator.</p>
</dd>
<dt><a href="#partial">partial(fn, ...args)</a> ⇒ <code>function</code></dt>
<dd><p>Partially apply arguments to a function from left to right.</p>
</dd>
<dt><a href="#partialRight">partialRight(fn, ...outerArgs)</a> ⇒ <code>function</code></dt>
<dd><p>Partially apply arguments to a function from right to left.</p>
</dd>
<dt><a href="#trim">trim(val)</a> ⇒ <code>string</code></dt>
<dd><p>Trims a string. Works like the string trim method.</p>
</dd>
<dt><a href="#dec">dec(num)</a> ⇒ <code>number</code></dt>
<dd><p>Decrement a number by one.</p>
</dd>
<dt><a href="#inc">inc(num)</a> ⇒ <code>number</code></dt>
<dd><p>Increment a number by one.</p>
</dd>
<dt><a href="#subtract">subtract(...numbers)</a> ⇒ <code>number</code></dt>
<dd><p>Subtract all numbers passed into the function. It will subtract from left to right, first argument minus the second and then the product minus the next argument and so on.</p>
</dd>
<dt><a href="#sum">sum(...numbers)</a> ⇒ <code>number</code></dt>
<dd><p>Sum all numbers passed into the function. It will sum from left to right, first argument plus the second and then the product plus the next argument and so on.</p>
</dd>
</dl>

<a name="bimap"></a>

## bimap(leftFn, rightFn, p) ⇒ <code>Promise.&lt;(R\|never)&gt;</code>
Map over the success or error of a promise.

**Kind**: global function  

| Param | Type |
| --- | --- |
| leftFn | <code>function</code> | 
| rightFn | <code>function</code> | 
| p | <code>Promise.&lt;(T\|never)&gt;</code> | 

<a name="fmap"></a>

## fmap(fn, p) ⇒ <code>Promise.&lt;(T\|never)&gt;</code>
Map over the value of a promise. The function provided should return another Promise.

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| p | <code>Promise.&lt;(T\|never)&gt;</code> | 

<a name="lmap"></a>

## lmap(fn, p) ⇒ <code>Promise.&lt;(T\|never)&gt;</code>
Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| p | <code>Promise.&lt;(T\|never)&gt;</code> | 

<a name="map"></a>

## map(fn, p) ⇒ <code>Promise.&lt;(T\|never)&gt;</code>
Map over the value of a promise. The map function will only be called if the promise is resolved.

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| p | <code>Promise.&lt;(T\|never)&gt;</code> | 

<a name="tap"></a>

## tap(fn, p) ⇒ <code>Promise.&lt;T&gt;</code>
Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| p | <code>Promise.&lt;T&gt;</code> | 

<a name="always"></a>

## always(val) ⇒ <code>function</code>
Creates a function which always returns the same value.

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="and"></a>

## and(...args) ⇒ <code>\*</code>
Evaluates all arguments passed and returns the first falsey or last truthy value. It works like && operator.

**Kind**: global function  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;mixed&gt;</code> | 

<a name="compose"></a>

## compose(...fns) ⇒ <code>function</code>
Compose a function from all functions passed as arguments from left to right.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Comma separated list of functions |

<a name="composeRight"></a>

## composeRight(...fns) ⇒ <code>function</code>
Compose a function from all functions passed as arguments from right to left.

**Kind**: global function  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 

<a name="curry"></a>

## curry(fn, ...initialArgs) ⇒ <code>function</code>
Curry a function taking arguments from left to right. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| ...initialArgs | <code>Array.&lt;mixed&gt;</code> | Comma separated list of arguments. Can be undefined. |

<a name="curryRight"></a>

## curryRight(fn, ...initialArgs) ⇒ <code>function</code>
Curry a function taking arguments from right to left. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| ...initialArgs | <code>$ReadOnlyArray.&lt;mixed&gt;</code> | Comma separated list of arguments. Can be undefined. |

<a name="identity"></a>

## identity(val) ⇒ <code>T</code>
Pass a value to a function which returns said value.

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>T</code> | 

<a name="inst"></a>

## inst(methodName, val) ⇒ <code>any</code> \| <code>null</code>
Call instance method of an object.

**Kind**: global function  

| Param | Type |
| --- | --- |
| methodName | <code>String</code> | 
| val | <code>Object</code> | 

<a name="negate"></a>

## negate(fn) ⇒ <code>function</code>
Creates a function which negates the value of the result.
Works like the ! operator on the result of the function provided

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="not"></a>

## not(val) ⇒ <code>boolean</code>
Negates a argument to a boolean value like the ! operator.

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="or"></a>

## or(...args) ⇒ <code>\*</code>
Evaluates all arguments passed and returns the first truthy or last falsey value. It works like || operator.

**Kind**: global function  

| Param | Type |
| --- | --- |
| ...args | <code>$ReadOnlyArray.&lt;mixed&gt;</code> | 

<a name="partial"></a>

## partial(fn, ...args) ⇒ <code>function</code>
Partially apply arguments to a function from left to right.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| ...args | <code>$ReadOnlyArray.&lt;mixed&gt;</code> | Comma separated list of values. |

<a name="partialRight"></a>

## partialRight(fn, ...outerArgs) ⇒ <code>function</code>
Partially apply arguments to a function from right to left.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| ...outerArgs | <code>$ReadOnlyArray.&lt;mixed&gt;</code> | Comma separated list of values. |

<a name="trim"></a>

## trim(val) ⇒ <code>string</code>
Trims a string. Works like the string trim method.

**Kind**: global function  

| Param |
| --- |
| val | 

<a name="dec"></a>

## dec(num) ⇒ <code>number</code>
Decrement a number by one.

**Kind**: global function  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

<a name="inc"></a>

## inc(num) ⇒ <code>number</code>
Increment a number by one.

**Kind**: global function  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

<a name="subtract"></a>

## subtract(...numbers) ⇒ <code>number</code>
Subtract all numbers passed into the function. It will subtract from left to right, first argument minus the second and then the product minus the next argument and so on.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...numbers | <code>Array.&lt;number&gt;</code> | Comma separated list of values. |

<a name="sum"></a>

## sum(...numbers) ⇒ <code>number</code>
Sum all numbers passed into the function. It will sum from left to right, first argument plus the second and then the product plus the next argument and so on.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...numbers | <code>Array.&lt;number&gt;</code> | Comma separated list of values. |



## Todo
- Add more function.
- Add data structures.
- Add algebraic types.
- Add Flow library definition to the flow-typed project.
