"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canvasToContext = exports.cloneCanvas = exports.canvasToSvg = exports.canvasToDataUrl = exports.canvasToBlob = exports.canvasToHtmlImage = exports.canvasToImageData = exports.createCanvas = void 0;
const h_1 = require("../../dom/h");
const util_1 = require("../../dom/util");
const context_1 = require("./context");
const html_image_1 = require("./html-image");
const image_data_1 = require("./image-data");
const settings_1 = require("./settings");
exports.createCanvas = (size) => {
    const el = h_1.canvas();
    const crossorigin = settings_1.getCrossOrigin();
    if (crossorigin) {
        util_1.attr(el, { crossorigin });
    }
    el.width = size.width;
    el.height = size.height;
    return el;
};
exports.canvasToImageData = (source) => context_1.contextToImageData(exports.canvasToContext(source));
exports.canvasToHtmlImage = (source) => html_image_1.loadHtmlImage(source.toDataURL());
exports.canvasToBlob = (source) => new Promise((resolve, reject) => {
    source.toBlob(blob => {
        if (blob === null)
            return reject(Error('Expected blob, got null'));
        resolve(blob);
    });
});
exports.canvasToDataUrl = (source) => source.toDataURL();
exports.canvasToSvg = async (source) => html_image_1.htmlImageToSvg(await html_image_1.loadHtmlImage(source.toDataURL()));
exports.cloneCanvas = (source) => image_data_1.imageDataToCanvas(exports.canvasToImageData(source));
exports.canvasToContext = (source) => {
    const context = source.getContext('2d');
    if (context === null)
        throw Error('Expected CanvasRenderingContext2D');
    return context;
};
//# sourceMappingURL=canvas.js.map