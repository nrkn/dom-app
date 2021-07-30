"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRect = exports.isSize = exports.isPoint = exports.isYPosition = exports.isXPosition = void 0;
const consts_1 = require("./consts");
const isXPosition = (value) => consts_1.xPositionNames.includes(value);
exports.isXPosition = isXPosition;
const isYPosition = (value) => consts_1.yPositionNames.includes(value);
exports.isYPosition = isYPosition;
const isPoint = (value) => value && typeof value.x === 'number' && typeof value.y === 'number';
exports.isPoint = isPoint;
const isSize = (value) => value && typeof value.width === 'number' && typeof value.height === 'number';
exports.isSize = isSize;
const isRect = (value) => exports.isPoint(value) && exports.isSize(value);
exports.isRect = isRect;
//# sourceMappingURL=predicates.js.map