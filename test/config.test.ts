import { describe, it, expect, vi } from 'vitest'
import { resolveOptionsConfig } from '../src/config'
import { OptionsConfig } from '../src/types'

describe("resolveOptionsConfig", ()=>{

  const defaultConfig: OptionsConfig = {
    schemaDir: 'schema',
    hasSubdirs: false,
    subdirectory: '',
    method: 'GET',
    typeName: '',
    fileName: '',
    isObjectArray: false
  }

  it("should console log error when path is not valid", ()=>{
    console.log = vi.fn()
    const options = Object.assign({}, defaultConfig)
    resolveOptionsConfig('//', options)
    expect(console.log).toBeCalled()
  })

  it("should fileName has value when path is valid", ()=>{
    const options = Object.assign({}, defaultConfig)
    resolveOptionsConfig('/users', options)
    expect(options.fileName).toBe('Users-GET')
  })

  it("should fileName has value and subdirectory has value when path is valid and hasSubdirs is true", ()=>{
    const options = Object.assign({}, defaultConfig, { hasSubdirs: true })
    resolveOptionsConfig('/users', options)
    expect(options.subdirectory).toBe('users')
    expect(options.fileName).toBe('Users-GET')

    resolveOptionsConfig('/vip/users', options)
    expect(options.subdirectory).toBe('vip')
    expect(options.fileName).toBe('Users-GET')

    resolveOptionsConfig('//vip/xxx/users', options)
    expect(options.subdirectory).toBe('vip')
    expect(options.fileName).toBe('Users-GET')

    resolveOptionsConfig('//vip/xxx/users/12', options)
    expect(options.subdirectory).toBe('vip')
    expect(options.fileName).toBe('User-GET')
  })

  it("should typeName is endsWith s when isObjectArray is true", ()=>{
    const options = Object.assign({}, defaultConfig, { isObjectArray: true })
    resolveOptionsConfig('/users', options)
    expect(options.typeName).toBe('Users')
  })
})