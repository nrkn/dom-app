export const randomId = () =>
  createSequence(16, randomChar).join('')

export const randomChar = () => String.fromCharCode(randomInt(26) + 97)

export const randomInt = (exclMax: number) =>
  Math.floor(Math.random() * exclMax)

export const createSequence = <T>(
  length: number, cb: (index: number) => T
) =>
  Array.from({ length }, (_v, index) => cb(index))

export const shuffle = <T>(
  values: T[]
) => {
  values = values.slice()

  let currentIndex = values.length
  let temporaryValue: T
  let randomIndex: number

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = values[currentIndex]

    values[currentIndex] = values[randomIndex]
    values[randomIndex] = temporaryValue
  }

  return values
}

export const strictMapGet = <T, K>(map: Map<K, T>, key: K) => {
  const existing = map.get(key)

  if (existing === undefined)
    throw Error(`Expected key ${key}`)

  return existing
}

export const assertUnique = <T>(map: Map<T, any>, key: T) => {
  if (map.has(key))
    throw Error(`Duplicate key ${key}`)
}

export const clone = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value))

export const noop = () => { }

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
