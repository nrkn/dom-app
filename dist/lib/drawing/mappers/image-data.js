"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageDataToSvg = exports.imageDataToCanvas = void 0;
const canvas_1 = require("./canvas");
const html_image_1 = require("./html-image");
const imageDataToCanvas = (source) => {
    const el = canvas_1.createCanvas(source);
    const context = canvas_1.canvasToContext(el);
    context.putImageData(source, 0, 0);
    return el;
};
exports.imageDataToCanvas = imageDataToCanvas;
const imageDataToSvg = async (source) => {
    const canvas = exports.imageDataToCanvas(source);
    const htmlImage = await canvas_1.canvasToHtmlImage(canvas);
    return html_image_1.htmlImageToSvg(htmlImage);
};
exports.imageDataToSvg = imageDataToSvg;
//# sourceMappingURL=image-data.js.map