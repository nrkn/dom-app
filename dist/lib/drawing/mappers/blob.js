"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyBlob = exports.cloneBlob = exports.blobToCanvas = exports.blobToHtmlImage = exports.blobToDataUrl = void 0;
const html_image_1 = require("./html-image");
const image_source_1 = require("./image-source");
const blobToDataUrl = (source) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        const { result } = reader;
        if (typeof result === 'string') {
            return resolve(result);
        }
        reject(Error('Expected a data URL'));
    };
    reader.readAsDataURL(source);
});
exports.blobToDataUrl = blobToDataUrl;
const blobToHtmlImage = async (source) => html_image_1.loadHtmlImage(await exports.blobToDataUrl(source));
exports.blobToHtmlImage = blobToHtmlImage;
const blobToCanvas = async (source) => image_source_1.imageSourceToCanvas(await exports.blobToHtmlImage(source));
exports.blobToCanvas = blobToCanvas;
const cloneBlob = (source) => new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
        if (r.result instanceof ArrayBuffer) {
            return resolve(new Blob([r.result], { type: source.type }));
        }
        reject(Error('Expected ArrayBuffer'));
    };
    r.onerror = reject;
    r.readAsArrayBuffer(source);
});
exports.cloneBlob = cloneBlob;
const stringifyBlob = ({ size, type }) => JSON.stringify({ blob: { size, type } });
exports.stringifyBlob = stringifyBlob;
//# sourceMappingURL=blob.js.map