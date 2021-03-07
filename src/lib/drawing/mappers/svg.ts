import { svgDataUrlHeader } from '../../dom/consts'
import { div } from '../../dom/h'
import { image, svg } from '../../dom/s'
import { attr, strictSelect } from '../../dom/util'
import { Size } from '../../geometry/types'
import { loadHtmlImage } from './html-image'
import { imageSourceToCanvas } from './image-source'
import { getCrossOrigin } from './settings'

export const loadSvgImage = (src: string) =>
  new Promise<SVGImageElement>(
    (resolve, reject) => {
      const el = image()

      const crossorigin = getCrossOrigin()

      if (crossorigin) {
        attr(el, { crossorigin })
      }

      el.onerror = reject
      el.onload = () => resolve(el)
      el.href.baseVal = src
    }
  )

export const createSvg = ({ width, height }: Size) => {
  const el = svg()

  const crossorigin = getCrossOrigin()

  if (crossorigin) {
    attr(el, { crossorigin })
  }

  attr(el, { width, height, viewBox: `0 0 ${width} ${height}` })

  return el
}

export const svgToDataUrl = (source: SVGSVGElement) => {
  source.setAttributeNS(
    'http://www.w3.org/2000/xmlns/', 'xmlns',
    'http://www.w3.org/2000/svg'
  )

  source.setAttributeNS(
    'http://www.w3.org/2000/xmlns/', 'xmlns:xlink',
    'http://www.w3.org/1999/xlink'
  )

  const xml = new XMLSerializer().serializeToString(source)
  const dataUrl = `${svgDataUrlHeader}${btoa(xml)}`

  return dataUrl
}

export const svgToHtmlImage = async (source: SVGSVGElement) => {
  const dataUrl = svgToDataUrl(source)

  const el = await loadHtmlImage(dataUrl)

  return el
}

export const svgToSize = async (source: SVGSVGElement) => {
  try {
    return sizeFromSvgViewBox(source)
  } catch (err) {
    if (err.message === 'Expected viewBox to be set') {
      const width = Number(source.width)
      const height = Number(source.height)

      return { width, height }
    }

    throw err
  }
}

export const svgToCanvas = async ( source: SVGSVGElement ) => 
  imageSourceToCanvas(await svgToHtmlImage(source))

export const sizeFromSvgViewBox = async (source: SVGSVGElement) => {
  const viewBox = source.getAttribute('viewBox')
  const error = Error('Expected viewBox to be set')

  if (viewBox === null || viewBox.trim() === '')
    throw error

  const segs = viewBox.split(' ')

  const values = (
    segs.map(s => s.trim()).filter(s => s !== '').map(s => Number(s))
  )

  const [, , width, height] = values

  if (
    typeof width === 'number' && !isNaN(width) &&
    typeof height === 'number' && !isNaN(height)
  ) {
    const size: Size = { width, height }

    return size
  }

  throw error
}

export const svgDataUrlToSvg = (source: string) => {
  source = source.slice(svgDataUrlHeader.length)

  const xml = atob(source)

  const el = div()

  el.innerHTML = xml

  const svgEl = strictSelect('svg', el)

  svgEl.remove()

  return svgEl
}
