"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRect = exports.isSize = exports.isPoint = exports.isYPosition = exports.isXPosition = void 0;
const consts_1 = require("./consts");
exports.isXPosition = (value) => consts_1.xPositionNames.includes(value);
exports.isYPosition = (value) => consts_1.yPositionNames.includes(value);
exports.isPoint = (value) => value && typeof value.x === 'number' && typeof value.y === 'number';
exports.isSize = (value) => value && typeof value.width === 'number' && typeof value.height === 'number';
exports.isRect = (value) => exports.isPoint(value) && exports.isSize(value);
//# sourceMappingURL=predicates.js.map