import { svgDataUrlHeader } from '../../dom/consts'
import { loadHtmlImage, htmlImageToSvg } from './html-image'
import { imageSourceToCanvas } from './image-source'
import { svgDataUrlToSvg } from './svg'

export const dataUrlToSvg = async (source: string) => {
  if (source.startsWith(svgDataUrlHeader)) return svgDataUrlToSvg(source)

  const imageEl = await loadHtmlImage(source)

  return htmlImageToSvg(imageEl)
}

export const dataUrlToCanvas = async (source: string) =>
  imageSourceToCanvas(await loadHtmlImage(source))
