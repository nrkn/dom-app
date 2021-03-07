import { canvasToContext, canvasToHtmlImage, createCanvas } from './canvas'
import { htmlImageToSvg } from './html-image'

export const imageDataToCanvas = (source: ImageData) => {
  const el = createCanvas( source )
  const context = canvasToContext( el )

  context.putImageData(source, 0, 0)

  return el
}

export const imageDataToSvg = async ( source: ImageData ) => {
  const canvas = imageDataToCanvas( source )

  const htmlImage = await canvasToHtmlImage( canvas )
  
  return htmlImageToSvg( htmlImage )
}
