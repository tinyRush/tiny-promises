# tiny-promises
Extend nodejs Promise with a lot of useful methods.
# Installation
`$ npm install --save tiny-promises`
# Usage
- Require it in your main file (entry point).
```javascript
// index.js

require('tiny-promises');
```
- Create your *.d.ts in root folder and add reference to `tiny-promises` type.
```javascript
// app.d.ts

/// <reference types="tiny-promises" />
```
- Done.
# Methods
- [queue](#queue)
- [pipe](#pipe)
- [pipeArray](#pipearray)
## queue
```javascript
Promise.queue<T, K>(queue: T[], handler: (item: T) => Promise<K>): Promise<K[]>
``` 
## pipe
```javascript
Promise.pipe<T>(...funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>
```
## pipeArray
```javascript 
Promise.pipeArray<T>(funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>
```
# License
[MIT](https://github.com/tinyRush/tiny-promises/blob/master/LICENSE)
