"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgDataUrlToSvg = exports.sizeFromSvgViewBox = exports.svgToCanvas = exports.svgToSize = exports.svgToHtmlImage = exports.svgToDataUrl = exports.createSvg = exports.loadSvgImage = void 0;
const consts_1 = require("../../dom/consts");
const h_1 = require("../../dom/h");
const s_1 = require("../../dom/s");
const util_1 = require("../../dom/util");
const html_image_1 = require("./html-image");
const image_source_1 = require("./image-source");
const settings_1 = require("./settings");
const loadSvgImage = (src) => new Promise((resolve, reject) => {
    const el = s_1.image();
    const crossorigin = settings_1.getCrossOrigin();
    if (crossorigin) {
        util_1.attr(el, { crossorigin });
    }
    el.onerror = reject;
    el.onload = () => resolve(el);
    el.href.baseVal = src;
});
exports.loadSvgImage = loadSvgImage;
const createSvg = ({ width, height }) => {
    const el = s_1.svg();
    const crossorigin = settings_1.getCrossOrigin();
    if (crossorigin) {
        util_1.attr(el, { crossorigin });
    }
    util_1.attr(el, { width, height, viewBox: `0 0 ${width} ${height}` });
    return el;
};
exports.createSvg = createSvg;
const svgToDataUrl = (source) => {
    source.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg');
    source.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    const xml = new XMLSerializer().serializeToString(source);
    const dataUrl = `${consts_1.svgDataUrlHeader}${btoa(xml)}`;
    return dataUrl;
};
exports.svgToDataUrl = svgToDataUrl;
const svgToHtmlImage = async (source) => {
    const dataUrl = exports.svgToDataUrl(source);
    const el = await html_image_1.loadHtmlImage(dataUrl);
    return el;
};
exports.svgToHtmlImage = svgToHtmlImage;
const svgToSize = async (source) => {
    try {
        return exports.sizeFromSvgViewBox(source);
    }
    catch (err) {
        if (err.message === 'Expected viewBox to be set') {
            const width = Number(source.width);
            const height = Number(source.height);
            return { width, height };
        }
        throw err;
    }
};
exports.svgToSize = svgToSize;
const svgToCanvas = async (source) => image_source_1.imageSourceToCanvas(await exports.svgToHtmlImage(source));
exports.svgToCanvas = svgToCanvas;
const sizeFromSvgViewBox = async (source) => {
    const viewBox = source.getAttribute('viewBox');
    const error = Error('Expected viewBox to be set');
    if (viewBox === null || viewBox.trim() === '')
        throw error;
    const segs = viewBox.split(' ');
    const values = (segs.map(s => s.trim()).filter(s => s !== '').map(s => Number(s)));
    const [, , width, height] = values;
    if (typeof width === 'number' && !isNaN(width) &&
        typeof height === 'number' && !isNaN(height)) {
        const size = { width, height };
        return size;
    }
    throw error;
};
exports.sizeFromSvgViewBox = sizeFromSvgViewBox;
const svgDataUrlToSvg = (source) => {
    source = source.slice(consts_1.svgDataUrlHeader.length);
    const xml = atob(source);
    const el = h_1.div();
    el.innerHTML = xml;
    const svgEl = util_1.strictSelect('svg', el);
    svgEl.remove();
    return svgEl;
};
exports.svgDataUrlToSvg = svgDataUrlToSvg;
//# sourceMappingURL=svg.js.map