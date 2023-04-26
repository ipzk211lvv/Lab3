if (!Array.fromAsync) {
    Array.fromAsync = async function(iterable, mapFn, thisArg) {
        if (!iterable[Symbol.asyncIterator]) {
            throw new TypeError('Object is not async iterable');
        }

        const values = [];
        for await (const value of iterable) {
            values.push(mapFn ? mapFn.call(thisArg, value) : value);
        }

        return Promise.all(values);
    }
}





