"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeys = exports.id = exports.noop = exports.clone = exports.assertUnique = exports.strictMapGet = exports.shuffle = exports.createSequence = exports.randomInt = exports.randomChar = exports.randomId = void 0;
exports.randomId = () => exports.createSequence(16, exports.randomChar).join('');
exports.randomChar = () => String.fromCharCode(exports.randomInt(26) + 97);
exports.randomInt = (exclMax) => Math.floor(Math.random() * exclMax);
exports.createSequence = (length, cb) => Array.from({ length }, (_v, index) => cb(index));
exports.shuffle = (values) => {
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
exports.strictMapGet = (map, key) => {
    const existing = map.get(key);
    if (existing === undefined)
        throw Error(`Expected key ${key}`);
    return existing;
};
exports.assertUnique = (map, key) => {
    if (map.has(key))
        throw Error(`Duplicate key ${key}`);
};
exports.clone = (value) => JSON.parse(JSON.stringify(value));
exports.noop = () => { };
exports.id = (value) => value;
exports.getKeys = (obj) => Object.keys(obj);
//# sourceMappingURL=util.js.map