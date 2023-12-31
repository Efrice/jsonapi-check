export function stripSlash(s: string): string {
  return stripStartSlash(stripEndSlash(s))
}

function stripEndSlash(s: string): string {
  return s.endsWith('/') ? s.substring(0, s.length - 1) : s
}

function stripStartSlash(s: string): string {
  return s.startsWith('/') ? s.substring(1) : s
}

export function isObject(value): boolean {
  return value !== null && typeof value === 'object'
}

export const isArray = Array.isArray

export function isNumber(value): boolean {
  return typeof value === 'number' && !isNaN(value)
}

export function getBaseType(value): string {
  return typeof value
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function lower(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1)
}
    
export function stripS(s: string): string {
  return s.endsWith('s') ? s.substring(0, s.length - 1) : s
}

export const extend = Object.assign
