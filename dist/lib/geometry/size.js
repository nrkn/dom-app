"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomToFit = void 0;
const object_fit_math_1 = require("object-fit-math");
const zoomToFit = (parent, child) => {
    const { x: fx, y: fy, width: fw } = object_fit_math_1.fitAndPosition(parent, child, 'contain', '50%', '50%');
    const scale = fw / child.width;
    const x = fx / scale;
    const y = fy / scale;
    const transform = { x, y, scale };
    return transform;
};
exports.zoomToFit = zoomToFit;
//# sourceMappingURL=size.js.map