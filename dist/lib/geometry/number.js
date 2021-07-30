"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = exports.toBase26 = exports.fromBase26 = exports.createNumericIndex = exports.snapToGrid = void 0;
const snapToGrid = (value, grid) => Math.floor(value / grid) * grid;
exports.snapToGrid = snapToGrid;
const createNumericIndex = (start = 0) => {
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
exports.createNumericIndex = createNumericIndex;
const fromBase26 = (value) => {
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
exports.fromBase26 = fromBase26;
const toBase26 = (number) => {
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
exports.toBase26 = toBase26;
const gcd = (a, b) => {
    let temp;
    while (b !== 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
};
exports.gcd = gcd;
//# sourceMappingURL=number.js.map