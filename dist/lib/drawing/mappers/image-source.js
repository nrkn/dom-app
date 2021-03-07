"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneImageSource = exports.imageSourceToDataUrl = exports.imageSourceToSvg = exports.imageSourceToSize = exports.imageSourceToElement = exports.imageSourceToHtmlImage = exports.imageSourceToImageData = exports.imageSourceToCanvas = exports.imageSourceToContext = void 0;
const predicates_1 = require("../../dom/predicates");
const util_1 = require("../../dom/util");
const canvas_1 = require("./canvas");
const html_image_1 = require("./html-image");
exports.imageSourceToContext = (source) => canvas_1.canvasToContext(exports.imageSourceToCanvas(source));
exports.imageSourceToCanvas = (source) => {
    const width = Number(source.width);
    const height = Number(source.height);
    const el = canvas_1.createCanvas({ width, height });
    const context = canvas_1.canvasToContext(el);
    context.drawImage(source, 0, 0);
    return el;
};
exports.imageSourceToImageData = (source) => {
    const context = exports.imageSourceToContext(source);
    const imageData = context.getImageData(0, 0, Number(source.width), Number(source.height));
    return imageData;
};
exports.imageSourceToHtmlImage = async (source) => {
    if (source instanceof HTMLImageElement) {
        return util_1.cloneElement(source);
    }
    return html_image_1.loadHtmlImage(exports.imageSourceToCanvas(source).toDataURL());
};
exports.imageSourceToElement = async (source) => {
    if (predicates_1.isElement(source)) {
        return util_1.cloneElement(source);
    }
    return html_image_1.loadHtmlImage(exports.imageSourceToCanvas(source).toDataURL());
};
exports.imageSourceToSize = (source) => {
    const width = Number(source.width);
    const height = Number(source.height);
    return { width, height };
};
exports.imageSourceToSvg = async (source) => html_image_1.htmlImageToSvg(await html_image_1.loadHtmlImage(exports.imageSourceToCanvas(source).toDataURL()));
exports.imageSourceToDataUrl = async (source) => exports.imageSourceToCanvas(source).toDataURL();
exports.cloneImageSource = async (source) => {
    if (source instanceof HTMLImageElement) {
        return util_1.cloneElement(source);
    }
    if (source instanceof HTMLCanvasElement)
        return canvas_1.cloneCanvas(source);
    return canvas_1.canvasToHtmlImage(exports.imageSourceToCanvas(source));
};
//# sourceMappingURL=image-source.js.map