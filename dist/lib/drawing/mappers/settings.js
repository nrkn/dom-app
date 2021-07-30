"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCrossOrigin = exports.clearCrossOrigin = exports.setCrossOrigin = void 0;
let crossOrigin = undefined;
const setCrossOrigin = (value) => {
    crossOrigin = value;
};
exports.setCrossOrigin = setCrossOrigin;
const clearCrossOrigin = () => {
    crossOrigin = undefined;
};
exports.clearCrossOrigin = clearCrossOrigin;
const getCrossOrigin = () => crossOrigin;
exports.getCrossOrigin = getCrossOrigin;
//# sourceMappingURL=settings.js.map