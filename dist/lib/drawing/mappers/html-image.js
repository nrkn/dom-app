"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlImageToSvg = exports.htmlImageToSvgImage = exports.loadHtmlImage = void 0;
const util_1 = require("../../dom/util");
const settings_1 = require("./settings");
const svg_1 = require("./svg");
const loadHtmlImage = async (src) => {
    const el = new Image();
    const crossorigin = settings_1.getCrossOrigin();
    if (crossorigin) {
        el.crossOrigin = crossorigin;
    }
    el.src = src;
    await el.decode();
    return el;
};
exports.loadHtmlImage = loadHtmlImage;
const htmlImageToSvgImage = async (source) => {
    const { width, height, src } = source;
    const el = await svg_1.loadSvgImage(src);
    util_1.attr(el, { width, height });
    return el;
};
exports.htmlImageToSvgImage = htmlImageToSvgImage;
const htmlImageToSvg = async (source) => {
    const { width, height } = source;
    const el = svg_1.createSvg({ width, height });
    const svgImageEl = await exports.htmlImageToSvgImage(source);
    el.append(svgImageEl);
    return el;
};
exports.htmlImageToSvg = htmlImageToSvg;
//# sourceMappingURL=html-image.js.map