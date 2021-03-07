"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextToImageData = void 0;
exports.contextToImageData = (source) => {
    const imageData = source.getImageData(0, 0, Number(source.canvas.width), Number(source.canvas.height));
    return imageData;
};
//# sourceMappingURL=context.js.map