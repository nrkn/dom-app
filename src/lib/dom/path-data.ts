import { Point, Rect } from '../geometry/types'

const join = (...args: any[]) => args.join(' ')

export const pathData = join

const pointArgs = ({ x, y }: Point) => [x, y]

const pathPoint = (prefix: string, { x, y }: Point) =>
  join(prefix, x, y)

export const close = () => 'Z'

export const move = (point: Point) => pathPoint('M', point)
export const moveRel = (delta: Point) => pathPoint('m', delta)
export const line = (point: Point) => pathPoint('L', point)
export const lineRel = (delta: Point) => pathPoint('l', delta)
export const horiz = (x: number) => join('H', x)
export const horizRel = (dx: number) => join('h', dx)
export const vert = (y: number) => join('V', y)
export const vertRel = (y: number) => join('v', y)

export const curve = (ctrl1: Point, ctrl2: Point, end: Point) => 
  join( 'C', ...pointArgs( ctrl1 ), ...pointArgs( ctrl2 ), ...pointArgs( end ) )

export const curveRel = (ctrl1: Point, ctrl2: Point, end: Point) => 
  join( 'c', ...pointArgs( ctrl1 ), ...pointArgs( ctrl2 ), ...pointArgs( end ) )

export const curveS = ( ctrl: Point, end: Point ) =>
  join( 'S', ...pointArgs( ctrl ), ...pointArgs( end ) )

export const curveSRel = ( ctrl: Point, end: Point ) =>
  join( 's', ...pointArgs( ctrl ), ...pointArgs( end ) )

export const quad = ( ctrl: Point, end: Point ) =>
  join( 'Q', ...pointArgs( ctrl ), ...pointArgs( end ) )

export const quadRel = ( ctrl: Point, end: Point ) =>
  join( 'q', ...pointArgs( ctrl ), ...pointArgs( end ) )

export const quadT = ( point: Point ) => pathPoint( 'T', point )

export const quadTRel = ( point: Point ) => pathPoint( 't', point )

export const rectToPathData = ( rect: Rect ) => 
  join(
    move( rect ),
    horizRel( rect.width ),
    vertRel( rect.height ),
    horizRel( -rect.width ),
    close()
  )