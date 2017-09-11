/// <reference path="../types/TinyPromises.d.ts" />

Promise.queue = <TypeQueue, TypePromise>(
  queue: TypeQueue[],
  handler: (item: TypeQueue) => Promise<TypePromise>
): Promise<TypePromise[]> => {
  return new Promise<TypePromise[]>((resolve, reject) => {
    let responses = [];
    queue
      .reduce((acc, item, index) => {
        return acc.then(response => {
          if (index > 0) responses.push(response);
          return handler(item);
        });
      }, Promise.resolve({} as TypePromise))
      .then((response: TypePromise) => {
        responses.push(response);
        resolve(responses);
      })
      .catch(reject);
  });
};

Promise.pipe = <T>(...funcs: ((arg) => Promise<T>)[]): ((arg) => Promise<T>) =>
  funcs.reduce((f, g) => arg => f(arg).then(g));

Promise.pipeArray = <T>(
  funcs: ((arg) => Promise<T>)[]
): ((arg) => Promise<T>) => funcs.reduce((f, g) => arg => f(arg).then(g));

export {};
