"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawingMapper = void 0;
const util_1 = require("../../dom/util");
const blob_1 = require("./blob");
const canvas_1 = require("./canvas");
const context_1 = require("./context");
const data_url_1 = require("./data-url");
const html_image_1 = require("./html-image");
const image_data_1 = require("./image-data");
const image_source_1 = require("./image-source");
const svg_1 = require("./svg");
const syncToAsync = (sync) => async (from) => sync(from);
const justSize = async ({ width, height }) => ({ width, height });
exports.drawingMapper = {
    imageSource: {
        imageSource: image_source_1.cloneImageSource,
        htmlImage: image_source_1.imageSourceToHtmlImage,
        canvas: syncToAsync(image_source_1.imageSourceToCanvas),
        context: syncToAsync(image_source_1.imageSourceToContext),
        imageData: syncToAsync(image_source_1.imageSourceToImageData),
        blob: source => canvas_1.canvasToBlob(image_source_1.imageSourceToCanvas(source)),
        size: syncToAsync(image_source_1.imageSourceToSize),
        svg: image_source_1.imageSourceToSvg,
        dataUrl: image_source_1.imageSourceToDataUrl
    },
    htmlImage: {
        imageSource: image_source_1.cloneImageSource,
        htmlImage: syncToAsync(util_1.cloneElement),
        canvas: syncToAsync(image_source_1.imageSourceToCanvas),
        context: syncToAsync(image_source_1.imageSourceToContext),
        imageData: syncToAsync(image_source_1.imageSourceToImageData),
        blob: source => canvas_1.canvasToBlob(image_source_1.imageSourceToCanvas(source)),
        size: justSize,
        svg: html_image_1.htmlImageToSvg,
        dataUrl: image_source_1.imageSourceToDataUrl
    },
    canvas: {
        imageSource: canvas_1.canvasToHtmlImage,
        htmlImage: canvas_1.canvasToHtmlImage,
        canvas: syncToAsync(canvas_1.cloneCanvas),
        context: syncToAsync(canvas_1.canvasToContext),
        imageData: syncToAsync(canvas_1.canvasToImageData),
        blob: canvas_1.canvasToBlob,
        size: justSize,
        svg: canvas_1.canvasToSvg,
        dataUrl: syncToAsync(canvas_1.canvasToDataUrl)
    },
    context: {
        imageSource: source => canvas_1.canvasToHtmlImage(source.canvas),
        htmlImage: source => canvas_1.canvasToHtmlImage(source.canvas),
        canvas: async (source) => canvas_1.cloneCanvas(source.canvas),
        context: async (source) => canvas_1.canvasToContext(canvas_1.cloneCanvas(source.canvas)),
        imageData: syncToAsync(context_1.contextToImageData),
        blob: source => canvas_1.canvasToBlob(source.canvas),
        size: source => justSize(source.canvas),
        svg: async (source) => canvas_1.canvasToSvg(source.canvas),
        dataUrl: async (source) => source.canvas.toDataURL()
    },
    imageData: {
        imageSource: source => canvas_1.canvasToHtmlImage(image_data_1.imageDataToCanvas(source)),
        htmlImage: source => canvas_1.canvasToHtmlImage(image_data_1.imageDataToCanvas(source)),
        canvas: async (source) => image_data_1.imageDataToCanvas(source),
        context: async (source) => canvas_1.canvasToContext(image_data_1.imageDataToCanvas(source)),
        imageData: async (source) => util_1.cloneImageData(source),
        blob: source => canvas_1.canvasToBlob(image_data_1.imageDataToCanvas(source)),
        size: justSize,
        svg: image_data_1.imageDataToSvg,
        dataUrl: async (source) => image_data_1.imageDataToCanvas(source).toDataURL()
    },
    blob: {
        imageSource: blob_1.blobToHtmlImage,
        htmlImage: blob_1.blobToHtmlImage,
        canvas: blob_1.blobToCanvas,
        context: async (source) => canvas_1.canvasToContext(await blob_1.blobToCanvas(source)),
        imageData: async (source) => canvas_1.canvasToImageData(await blob_1.blobToCanvas(source)),
        blob: blob_1.cloneBlob,
        size: async (source) => justSize(await blob_1.blobToHtmlImage(source)),
        svg: async (source) => html_image_1.htmlImageToSvg(await blob_1.blobToHtmlImage(source)),
        dataUrl: blob_1.blobToDataUrl
    },
    svg: {
        imageSource: svg_1.svgToHtmlImage,
        htmlImage: svg_1.svgToHtmlImage,
        canvas: svg_1.svgToCanvas,
        context: async (source) => canvas_1.canvasToContext(await svg_1.svgToCanvas(source)),
        imageData: async (source) => canvas_1.canvasToImageData(await svg_1.svgToCanvas(source)),
        blob: async (source) => canvas_1.canvasToBlob(await svg_1.svgToCanvas(source)),
        size: svg_1.svgToSize,
        svg: async (source) => util_1.cloneElement(source),
        dataUrl: async (source) => svg_1.svgToDataUrl(source)
    },
    dataUrl: {
        imageSource: html_image_1.loadHtmlImage,
        htmlImage: html_image_1.loadHtmlImage,
        canvas: data_url_1.dataUrlToCanvas,
        context: async (source) => canvas_1.canvasToContext(await data_url_1.dataUrlToCanvas(source)),
        imageData: async (source) => canvas_1.canvasToImageData(await data_url_1.dataUrlToCanvas(source)),
        blob: async (source) => canvas_1.canvasToBlob(await data_url_1.dataUrlToCanvas(source)),
        size: async (source) => justSize(await html_image_1.loadHtmlImage(source)),
        svg: data_url_1.dataUrlToSvg,
        dataUrl: async (source) => source
    },
    size: {
        imageSource: async (source) => new Image(source.width, source.height),
        htmlImage: async (source) => new Image(source.width, source.height),
        canvas: async (source) => canvas_1.createCanvas(source),
        context: async (source) => canvas_1.canvasToContext(canvas_1.createCanvas(source)),
        imageData: async (source) => canvas_1.canvasToImageData(canvas_1.createCanvas(source)),
        blob: source => canvas_1.canvasToBlob(canvas_1.createCanvas(source)),
        size: justSize,
        svg: syncToAsync(svg_1.createSvg),
        dataUrl: async (source) => canvas_1.createCanvas(source).toDataURL()
    }
};
//# sourceMappingURL=index.js.map