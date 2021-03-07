
export const contextToImageData = (source: CanvasRenderingContext2D) => {
  const imageData = source.getImageData(
    0, 0,
    Number(source.canvas.width), Number(source.canvas.height)
  )

  return imageData
}
