"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUrlToCanvas = exports.dataUrlToSvg = void 0;
const consts_1 = require("../../dom/consts");
const html_image_1 = require("./html-image");
const image_source_1 = require("./image-source");
const svg_1 = require("./svg");
exports.dataUrlToSvg = async (source) => {
    if (source.startsWith(consts_1.svgDataUrlHeader))
        return svg_1.svgDataUrlToSvg(source);
    const imageEl = await html_image_1.loadHtmlImage(source);
    return html_image_1.htmlImageToSvg(imageEl);
};
exports.dataUrlToCanvas = async (source) => image_source_1.imageSourceToCanvas(await html_image_1.loadHtmlImage(source));
//# sourceMappingURL=data-url.js.map