export const $ = (selector, baseElement = document) => baseElement?.querySelector(selector)

export const $$ = (selector, baseElement = document) =>
  [].slice.call(baseElement?.querySelectorAll(selector) || [])

export const tap = fn => _ => fn() || _

export const filter = fn => arr => arr.filter(fn)

export const forEach = fn => arr => arr.forEach(fn)

export const log = label => _ => console.log(`${label} =>`, _) || _ // eslint-disable-line no-console

export const reduce = (fn, init) => arr => arr.reduce(fn, init)

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const BREAKPOINTS = {
  xs: 430,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}
