"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdgePositions = exports.findYPosition = exports.findXPosition = exports.getYPosition = exports.getXPosition = void 0;
const util_1 = require("../util");
const predicates_1 = require("./predicates");
const rect_1 = require("./rect");
exports.getXPosition = ({ x, width }, position) => {
    switch (position) {
        case 'left': return x;
        case 'right': return x + width;
        case 'xCenter': return x + width / 2;
    }
};
exports.getYPosition = ({ y, height }, position) => {
    switch (position) {
        case 'top': return y;
        case 'bottom': return y + height;
        case 'yCenter': return y + height / 2;
    }
};
exports.findXPosition = (values) => {
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (predicates_1.isXPosition(value))
            return value;
    }
};
exports.findYPosition = (values) => {
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (predicates_1.isYPosition(value))
            return value;
    }
};
exports.getEdgePositions = (rect, growBy, point) => {
    const outerRect = rect_1.growRect(rect, growBy * 2);
    const innerRect = util_1.clone(rect);
    if (!rect_1.rectContainsPoint(outerRect, point))
        return;
    const positions = ['xCenter', 'yCenter'];
    if (rect_1.rectContainsPoint(innerRect, point))
        return positions;
    const outerSides = rect_1.rectToSidesRect(outerRect);
    const innerSides = rect_1.rectToSidesRect(innerRect);
    if (point.y >= outerSides.top && point.y <= innerSides.top) {
        positions[1] = 'top';
    }
    if (point.x >= innerSides.right && point.x <= outerSides.right) {
        positions[0] = 'right';
    }
    if (point.y >= innerSides.bottom && point.y <= outerSides.bottom) {
        positions[1] = 'bottom';
    }
    if (point.x >= outerSides.left && point.x <= innerSides.left) {
        positions[0] = 'left';
    }
    return positions;
};
//# sourceMappingURL=position.js.map