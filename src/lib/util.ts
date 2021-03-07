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

export const id = <T>( value: T ) => value

export const getKeys = <T>(obj: T) =>
  Object.keys(obj) as (keyof T & string)[]
