import { canvas } from '../../dom/h'
import { attr } from '../../dom/util'
import { Size } from '../../geometry/types'
import { contextToImageData } from './context'
import { htmlImageToSvg, loadHtmlImage } from './html-image'
import { imageDataToCanvas } from './image-data'
import { getCrossOrigin } from './settings'

export const createCanvas = (size: Size) => {
  const el = canvas()

  const crossorigin = getCrossOrigin()

  if (crossorigin) {
    attr(el, { crossorigin })
  }

  el.width = size.width
  el.height = size.height

  return el
}

export const canvasToImageData = (source: HTMLCanvasElement) =>
  contextToImageData(canvasToContext(source))

export const canvasToHtmlImage = (source: HTMLCanvasElement) =>
  loadHtmlImage(source.toDataURL())

export const canvasToBlob = (source: HTMLCanvasElement) => new Promise<Blob>(
  (resolve, reject) => {
    source.toBlob(blob => {
      if (blob === null) return reject(Error('Expected blob, got null'))

      resolve(blob)
    })
  }
)

export const canvasToDataUrl = (source: HTMLCanvasElement) =>
  source.toDataURL()

export const canvasToSvg = async (source: HTMLCanvasElement) =>
  htmlImageToSvg(
    await loadHtmlImage(source.toDataURL())
  )

export const cloneCanvas = (source: HTMLCanvasElement) =>
  imageDataToCanvas(canvasToImageData(source))

export const canvasToContext = (source: HTMLCanvasElement) => {
  const context = source.getContext('2d')

  if (context === null) throw Error('Expected CanvasRenderingContext2D')

  return context
}
