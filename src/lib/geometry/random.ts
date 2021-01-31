import { createSequence, randomInt, shuffle } from '../util'
import { Point } from './types'

export const randomConvexPoly = (n: number) => {
  const xPool = createSequence(n, () => Math.random()).sort()
  const yPool = createSequence(n, () => Math.random()).sort()

  const minX = xPool[0]
  const maxX = xPool[n - 1]

  const minY = yPool[0]
  const maxY = yPool[n - 1]

  let xVec: number[] = []
  let yVec: number[] = []

  let lastTop = minX
  let lastBottom = minX

  for (let i = 1; i < n - 1; i++) {
    const x = xPool[i]

    if (randomInt(2)) {
      xVec.push(x - lastTop)
      lastTop = x
    } else {
      xVec.push(lastBottom - x)
      lastBottom = x
    }
  }

  xVec.push(maxX - lastTop)
  xVec.push(lastBottom - maxX)

  let lastLeft = minY
  let lastRight = minY

  for (let i = 1; i < n - 1; i++) {
    const y = yPool[i]

    if (randomInt(2)) {
      yVec.push(y - lastLeft)
      lastLeft = y
    } else {
      yVec.push(lastRight - y)
      lastRight = y
    }
  }

  yVec.push(maxY - lastLeft)
  yVec.push(lastRight - maxY)

  yVec = shuffle(yVec)

  const vec: Point[] = createSequence(
    n,
    i => (
      {
        x: xVec[i],
        y: yVec[i]
      }
    )
  )

  vec.sort(
    (a, b) => Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x)
  )

  let x = 0, y = 0
  let minPolygonX = 0
  let minPolygonY = 0

  const points: Point[] = createSequence(
    n,
    i => {
      const point = { x, y }

      x += vec[i].x
      y += vec[i].y

      minPolygonX = Math.min(minPolygonX, x)
      minPolygonY = Math.min(minPolygonY, y)

      return point
    }
  )

  let xShift = minX - minPolygonX
  let yShift = minY - minPolygonY

  for (let i = 0; i < n; i++) {
    const { x, y } = points[ i ]

    points[ i ] = {
      x: x + xShift,
      y: y + yShift
    }
  }

  return points
}
