"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeys = exports.id = exports.noop = exports.clone = exports.assertUnique = exports.strictMapGet = exports.shuffle = exports.createSequence = exports.randomInt = exports.randomChar = exports.randomId = void 0;
const randomId = () => exports.createSequence(16, exports.randomChar).join('');
exports.randomId = randomId;
const randomChar = () => String.fromCharCode(exports.randomInt(26) + 97);
exports.randomChar = randomChar;
const randomInt = (exclMax) => Math.floor(Math.random() * exclMax);
exports.randomInt = randomInt;
const createSequence = (length, cb) => Array.from({ length }, (_v, index) => cb(index));
exports.createSequence = createSequence;
const shuffle = (values) => {
    values = values.slice();
    let currentIndex = values.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = values[currentIndex];
        values[currentIndex] = values[randomIndex];
        values[randomIndex] = temporaryValue;
    }
    return values;
};
exports.shuffle = shuffle;
const strictMapGet = (map, key) => {
    const existing = map.get(key);
    if (existing === undefined)
        throw Error(`Expected key ${key}`);
    return existing;
};
exports.strictMapGet = strictMapGet;
const assertUnique = (map, key) => {
    if (map.has(key))
        throw Error(`Duplicate key ${key}`);
};
exports.assertUnique = assertUnique;
const clone = (value) => JSON.parse(JSON.stringify(value));
exports.clone = clone;
const noop = () => { };
exports.noop = noop;
const id = (value) => value;
exports.id = id;
const getKeys = (obj) => Object.keys(obj);
exports.getKeys = getKeys;
//# sourceMappingURL=util.js.map