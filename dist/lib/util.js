"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = exports.toBase26 = exports.fromBase26 = exports.createNumericIndex = exports.noop = exports.clone = exports.assertUnique = exports.strictMapGet = exports.shuffle = exports.createSequence = exports.randomInt = exports.randomChar = exports.randomId = void 0;
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
exports.createNumericIndex = (start = 0) => {
    const ids = new Map();
    const getNext = (name) => {
        let index = ids.get(name);
        if (index === undefined) {
            index = start;
        }
        ids.set(name, index + 1);
        return index;
    };
    return getNext;
};
exports.fromBase26 = (value) => {
    if (!/^[a-z]+$/.test(value)) {
        throw Error('Expected non-empty string comprised of a-z');
    }
    const letters = value.split('');
    let out = 0;
    for (let i = 0; i < letters.length; i++) {
        out += (letters[letters.length - 1 - i].charCodeAt(0) - 96) * Math.pow(26, i);
    }
    return out;
};
exports.toBase26 = (number) => {
    if (number <= 0) {
        throw Error('Expected > 0');
    }
    let out = '';
    while (true) {
        out = String.fromCharCode(((number - 1) % 26) + 97) + out;
        number = Math.floor((number - 1) / 26);
        if (number === 0) {
            break;
        }
    }
    return out;
};
exports.gcd = (a, b) => {
    let temp;
    while (b !== 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
};
//# sourceMappingURL=util.js.map