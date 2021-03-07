let crossOrigin: string | undefined = undefined

export const setCrossOrigin = ( value: string ) => {
  crossOrigin = value
}

export const clearCrossOrigin = () => {
  crossOrigin = undefined
}

export const getCrossOrigin = () => crossOrigin
