const concat = (...args) => {
    let result = [];

    args.map(arg => {
        if (typeof arg === 'string') {
            result.push(...arg.split(''));
        }
        else if (Array.isArray(arg)) {
            result.push(...arg);
        }
    });

    return result;
};

const resultArray = concat('hi', [1, 2, 3], ['Hello', 'world']);
console.log(resultArray); // Output: ['h', 'i', 1, 2, 3, 'Hello', 'world']
