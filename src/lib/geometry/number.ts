export const snapToGrid = (
  value: number, grid: number
) => Math.floor( value / grid ) * grid


export const createNumericIndex = (start = 0) => {
  const ids = new Map<string, number>()

  const getNext = (name: string) => {
    let index = ids.get(name)

    if (index === undefined) {
      index = start
    }

    ids.set(name, index + 1)

    return index
  }

  return getNext
}

export const fromBase26 = (value: string) => {
  if (!/^[a-z]+$/.test(value)) {
    throw Error('Expected non-empty string comprised of a-z')
  }

  const letters = value.split('')
  let out = 0

  for (let i = 0; i < letters.length; i++) {
    out += (letters[letters.length - 1 - i].charCodeAt(0) - 96) * Math.pow(26, i)
  }

  return out
}

export const toBase26 = (number: number) => {
  if (number <= 0) {
    throw Error('Expected > 0')
  }

  let out = ''

  while (true) {
    out = String.fromCharCode(((number - 1) % 26) + 97) + out
    number = Math.floor((number - 1) / 26)

    if (number === 0) {
      break
    }
  }

  return out
}

export const gcd = (a: number, b: number) => {
  let temp: number

  while( b !== 0 ){
    temp = a % b
    a = b
    b = temp
  }

  return a
}
