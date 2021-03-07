import { attr } from '../../dom/util'
import { getCrossOrigin } from './settings'
import { loadSvgImage, createSvg } from './svg'

export const loadHtmlImage = async ( src: string ) => {
  const el = new Image()

  const crossorigin = getCrossOrigin()

  if( crossorigin ){
    el.crossOrigin = crossorigin
  }
  
  el.src = src

  await el.decode()

  return el
}

export const htmlImageToSvgImage = async (source: HTMLImageElement) => {
  const { width, height, src } = source

  const el = await loadSvgImage(src)

  attr(el, { width, height })

  return el
}

export const htmlImageToSvg = async (source: HTMLImageElement) => {
  const { width, height } = source

  const el = createSvg({ width, height })

  const svgImageEl = await htmlImageToSvgImage(source)

  el.append(svgImageEl)

  return el
}
