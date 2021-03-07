import { cloneElement, cloneImageData } from '../../dom/util'
import { Size } from '../../geometry/types'
import { blobToCanvas, blobToDataUrl, blobToHtmlImage, cloneBlob } from './blob'

import {
  canvasToBlob, canvasToHtmlImage, cloneCanvas, canvasToImageData, createCanvas,
  canvasToContext,
  canvasToSvg,
  canvasToDataUrl
} from './canvas'
import { contextToImageData } from './context'

import { dataUrlToCanvas, dataUrlToSvg } from './data-url'
import { htmlImageToSvg, loadHtmlImage } from './html-image'
import { imageDataToCanvas, imageDataToSvg } from './image-data'

import {
  cloneImageSource, imageSourceToCanvas, imageSourceToContext,
  imageSourceToDataUrl, imageSourceToHtmlImage, imageSourceToImageData,
  imageSourceToSize, imageSourceToSvg
} from './image-source'

import { svgToHtmlImage, svgToSize, svgToDataUrl, createSvg, svgToCanvas } from './svg'
import { DrawingMapper } from './types'

const syncToAsync = <From, To>(sync: (from: From) => To) =>
  async (from: From) => sync(from)

const justSize = async ({ width, height }: Size): Promise<Size> =>
  ({ width, height })

export const drawingMapper: DrawingMapper = {
  imageSource: {
    imageSource: cloneImageSource,
    htmlImage: imageSourceToHtmlImage,
    canvas: syncToAsync(imageSourceToCanvas),
    context: syncToAsync(imageSourceToContext),
    imageData: syncToAsync(imageSourceToImageData),
    blob: source => canvasToBlob(imageSourceToCanvas(source)),
    size: syncToAsync(imageSourceToSize),
    svg: imageSourceToSvg,
    dataUrl: imageSourceToDataUrl
  },
  htmlImage: {
    imageSource: cloneImageSource,
    htmlImage: syncToAsync( cloneElement ),
    canvas: syncToAsync(imageSourceToCanvas),
    context: syncToAsync(imageSourceToContext),
    imageData: syncToAsync(imageSourceToImageData),
    blob: source => canvasToBlob(imageSourceToCanvas(source)),
    size: justSize,
    svg: htmlImageToSvg,
    dataUrl: imageSourceToDataUrl
  },
  canvas: {
    imageSource: canvasToHtmlImage,
    htmlImage: canvasToHtmlImage,
    canvas: syncToAsync(cloneCanvas),
    context: syncToAsync(canvasToContext),
    imageData: syncToAsync(canvasToImageData),
    blob: canvasToBlob,
    size: justSize,
    svg: canvasToSvg,
    dataUrl: syncToAsync(canvasToDataUrl)
  },
  context: {
    imageSource: source => canvasToHtmlImage(source.canvas),
    htmlImage: source => canvasToHtmlImage(source.canvas),
    canvas: async source => cloneCanvas(source.canvas),
    context: async source => canvasToContext(cloneCanvas(source.canvas)),
    imageData: syncToAsync(contextToImageData),
    blob: source => canvasToBlob(source.canvas),
    size: source => justSize(source.canvas),
    svg: async source => canvasToSvg(source.canvas),
    dataUrl: async source => source.canvas.toDataURL()
  },
  imageData: {
    imageSource: source => canvasToHtmlImage(imageDataToCanvas(source)),
    htmlImage: source => canvasToHtmlImage(imageDataToCanvas(source)),
    canvas: async source => imageDataToCanvas(source),
    context: async source => canvasToContext(imageDataToCanvas(source)),
    imageData: async source => cloneImageData(source),
    blob: source => canvasToBlob(imageDataToCanvas(source)),
    size: justSize,
    svg: imageDataToSvg,
    dataUrl: async source => imageDataToCanvas(source).toDataURL()
  },
  blob: {
    imageSource: blobToHtmlImage,
    htmlImage: blobToHtmlImage,
    canvas: blobToCanvas,
    context: async source => canvasToContext(await blobToCanvas(source)),
    imageData: async source => canvasToImageData(await blobToCanvas(source)),
    blob: cloneBlob,
    size: async source => justSize(await blobToHtmlImage(source)),
    svg: async source => htmlImageToSvg(await blobToHtmlImage(source)),
    dataUrl: blobToDataUrl
  },
  svg: {
    imageSource: svgToHtmlImage,
    htmlImage: svgToHtmlImage,
    canvas: svgToCanvas,
    context: async source => canvasToContext(await svgToCanvas(source)),
    imageData: async source => canvasToImageData(await svgToCanvas(source)),
    blob: async source => canvasToBlob(await svgToCanvas(source)),
    size: svgToSize,
    svg: async source => cloneElement(source),
    dataUrl: async source => svgToDataUrl(source)
  },
  dataUrl: {
    imageSource: loadHtmlImage,
    htmlImage: loadHtmlImage,
    canvas: dataUrlToCanvas,
    context: async source => canvasToContext(await dataUrlToCanvas(source)),
    imageData: async source => canvasToImageData(await dataUrlToCanvas(source)),
    blob: async source => canvasToBlob(await dataUrlToCanvas(source)),
    size: async source => justSize(await loadHtmlImage(source)),
    svg: dataUrlToSvg,
    dataUrl: async source => source
  },
  size: {
    imageSource: async source => new Image(source.width, source.height),
    htmlImage: async source => new Image(source.width, source.height),
    canvas: async source => createCanvas(source),
    context: async source => canvasToContext(createCanvas(source)),
    imageData: async source => canvasToImageData(createCanvas(source)),
    blob: source => canvasToBlob(createCanvas(source)),
    size: justSize,
    svg: syncToAsync(createSvg),
    dataUrl: async source => createCanvas(source).toDataURL()
  }
}