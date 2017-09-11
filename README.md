# tiny-promise
Extend nodejs Promise with a lot of useful methods.
# Installation
`$ npm install --save tiny-promise`
# Usage
Just require it in your main (index.js for example).
```javascript
require('tiny-promise');
```
# Methods
- [queue](#queue)
- [pipe](#pipe)
- [pipeArray](#pipeArray)
## queue
`queue<T, K>(queue: T[], handler: (item: T) => Promise<K>): Promise<K[]>` 
## pipe
`pipe<T>(...funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>`
## pipeArray
`pipeArray<T>(funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>`
