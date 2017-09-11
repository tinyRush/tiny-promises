# tiny-promise
Extend nodejs Promise with a lot of useful methods.
# <a href="#installation" name="installation">Installation</a>
`npm install --save tiny-promise`
# <a href="#methods" name="methods">Methods</a>
- [queue](#methods-queue)
- [pipe](#methods-pipe)
- [pipeArray](#methods-pipeArray)
## <a name="methods-queue">queue</a>
`queue<T, K>(queue: T[], handler: (item: T) => Promise<K>): Promise<K[]>`
## <a name="methods-queue">pipe</a>
`pipe<T>(...funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>`
## <a name="methods-queue">pipeArray</a>
`pipeArray<T>(funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>`
