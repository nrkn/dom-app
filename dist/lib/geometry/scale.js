"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomAt = exports.translateAndScalePoint = exports.transformRelativeTo = void 0;
const point_1 = require("./point");
exports.transformRelativeTo = (existing, newScale, origin) => {
    const { scale } = existing;
    let newPoint = point_1.translatePoint(existing, point_1.scalePoint(origin, -1));
    newPoint = point_1.scalePoint(newPoint, newScale / scale);
    newPoint = point_1.translatePoint(newPoint, origin);
    const transformed = Object.assign(newPoint, { scale: newScale });
    return transformed;
};
exports.translateAndScalePoint = ({ x, y }, { x: tx, y: ty, scale }) => {
    x -= tx;
    y -= ty;
    x /= scale;
    y /= scale;
    return { x, y };
};
exports.zoomAt = (existingTransform, { scale, x, y }, minScale) => {
    if (scale < minScale)
        scale = minScale;
    const newTransform = exports.transformRelativeTo(existingTransform, scale, { x, y });
    return Object.assign({}, existingTransform, newTransform);
};
//# sourceMappingURL=scale.js.map