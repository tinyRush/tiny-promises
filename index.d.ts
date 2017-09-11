import * as tinyPromise from './lib/TinyPromise';

declare global {
  interface PromiseConstructor {
    queue<T, K>(queue: T[], handler: (item: T) => Promise<K>): Promise<K[]>;
    pipe<T>(...funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>;
    pipeArray<T>(funcs: ((arg) => Promise<T>)[]): (arg) => Promise<T>;
  }
}
