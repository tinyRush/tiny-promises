# tiny-promises
Extend nodejs Promise with a lot of useful methods.
# Installation
`$ npm install --save tiny-promises`
# Usage
Just require it in your main (index.js for example).
```javascript
require('tiny-promises');
```
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
