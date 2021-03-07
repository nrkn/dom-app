import { isElement } from '../../dom/predicates'
import { cloneElement } from '../../dom/util'
import { createCanvas, cloneCanvas, canvasToHtmlImage, canvasToContext } from './canvas'
import { htmlImageToSvg, loadHtmlImage } from './html-image'

export const imageSourceToContext = (source: CanvasImageSource) =>
  canvasToContext(imageSourceToCanvas(source))

export const imageSourceToCanvas = (source: CanvasImageSource) => {
  const width = Number(source.width)
  const height = Number(source.height)
  const el = createCanvas({ width, height })
  const context = canvasToContext(el)

  context.drawImage(source, 0, 0)

  return el
}

export const imageSourceToImageData = (source: CanvasImageSource) => {
  const context = imageSourceToContext(source)

  const imageData = context.getImageData(
    0, 0,
    Number(source.width), Number(source.height)
  )

  return imageData
}

export const imageSourceToHtmlImage = async (source: CanvasImageSource) => {
  if (source instanceof HTMLImageElement) {
    return cloneElement(source)
  }

  return loadHtmlImage(imageSourceToCanvas(source).toDataURL())
}

export const imageSourceToElement = async (
  source: CanvasImageSource
): Promise<Element> => {

  if (isElement(source)) {
    return cloneElement(source)
  }

  return loadHtmlImage(imageSourceToCanvas(source).toDataURL())
}

export const imageSourceToSize = (source: CanvasImageSource) => {
  const width = Number(source.width)
  const height = Number(source.height)

  return { width, height }
}

export const imageSourceToSvg = async (source: CanvasImageSource) =>
  htmlImageToSvg(
    await loadHtmlImage(imageSourceToCanvas(source).toDataURL())
  )

export const imageSourceToDataUrl = async (source: CanvasImageSource) =>
  imageSourceToCanvas(source).toDataURL()

export const cloneImageSource = async (source: CanvasImageSource) => {
  if (source instanceof HTMLImageElement) {
    return cloneElement(source)
  }

  if (source instanceof HTMLCanvasElement) return cloneCanvas(source)

  return canvasToHtmlImage(imageSourceToCanvas(source))
}
