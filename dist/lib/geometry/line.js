"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = exports.normalizeLine = exports.createLine = exports.lineToVector = void 0;
exports.lineToVector = ({ x1, y1, x2, y2 }) => ({
    x: x2 - x1,
    y: y2 - y1
});
exports.createLine = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
    x1, y1, x2, y2
});
exports.normalizeLine = ({ x1: startX, y1: startY, x2: endX, y2: endY }) => {
    const x1 = Math.min(startX, endX);
    const x2 = Math.max(startX, endX);
    const y1 = Math.min(startY, endY);
    const y2 = Math.max(startY, endY);
    return { x1, y1, x2, y2 };
};
exports.distance = (line) => {
    const { x, y } = exports.lineToVector(line);
    return Math.sqrt(x * x + y * y);
};
//# sourceMappingURL=line.js.map