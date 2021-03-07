"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCrossOrigin = exports.clearCrossOrigin = exports.setCrossOrigin = void 0;
let crossOrigin = undefined;
exports.setCrossOrigin = (value) => {
    crossOrigin = value;
};
exports.clearCrossOrigin = () => {
    crossOrigin = undefined;
};
exports.getCrossOrigin = () => crossOrigin;
//# sourceMappingURL=settings.js.map