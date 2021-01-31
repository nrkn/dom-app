"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tupleToPoint = exports.deltaPoint = exports.snapPointToGrid = exports.scalePoint = exports.translatePoint = void 0;
const number_1 = require("./number");
exports.translatePoint = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
    x: x1 + x2,
    y: y1 + y2
});
exports.scalePoint = ({ x, y }, scale) => ({
    x: x * scale,
    y: y * scale
});
exports.snapPointToGrid = ({ x, y }, { width: gridW, height: gridH }) => {
    x = number_1.snapToGrid(x, gridW);
    y = number_1.snapToGrid(y, gridH);
    return { x, y };
};
exports.deltaPoint = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
    x: x1 - x2,
    y: y1 - y2
});
exports.tupleToPoint = ([x, y]) => ({ x, y });
//# sourceMappingURL=point.js.map