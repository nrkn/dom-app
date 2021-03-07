import { loadHtmlImage } from './html-image'
import { imageSourceToCanvas } from './image-source'

export const blobToDataUrl = (source: Blob) =>
  new Promise<string>(
    (resolve, reject) => {
      const reader = new FileReader()

      reader.onloadend = () => {
        const { result } = reader

        if (typeof result === 'string') {
          return resolve(result)
        }

        reject(Error('Expected a data URL'))
      }

      reader.readAsDataURL(source)
    }
  )

export const blobToHtmlImage = async (source: Blob) =>
  loadHtmlImage(await blobToDataUrl(source))

export const blobToCanvas = async ( source: Blob ) => 
  imageSourceToCanvas( await blobToHtmlImage( source ) )

export const cloneBlob = (source: Blob) =>
  new Promise<Blob>(
    (resolve, reject) => {
      const r = new FileReader()

      r.onload = () => {
        if (r.result instanceof ArrayBuffer) {
          return resolve(new Blob([r.result], { type: source.type }))
        }

        reject(Error('Expected ArrayBuffer'))
      }
      r.onerror = reject
      r.readAsArrayBuffer(source)
    }
  )

export const stringifyBlob = ({ size, type }: Blob) =>
  JSON.stringify({ blob: { size, type } })
