// Creating the escapeStr constant
const escapeStr = '` \\ / " \'';

// Creating the arr constant
const arr = Object.freeze([4, '2']);

// Creating the obj constant
const obj = Object.freeze({
    str: 'string value',
    num: 42,
    bool: true,
    undef: undefined
});

// Creating the nested constant
const nested = Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
        str: 'nested string value',
        num: 100,
        bool: false
    })
});
