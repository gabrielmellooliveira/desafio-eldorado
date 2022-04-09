const { createResponseContent, createResponseErrors } = require('../../src/utils/responseBuilder')

describe('Create response API', () => {
  it('Create a response with content', () => {
    const result = createResponseContent({ message: 'OK' })

    expect(result).toHaveProperty('content')
    expect(result).toHaveProperty('errors')

    expect(result.errors).toBeNull()
    expect(result.content).not.toBeUndefined()

    expect(result.content).toHaveProperty('message', 'OK')
  })

  it('Create a response with errors', () => {
    const MESSAGE_ERROR_DB = 'Error in connection with database'
    const MESSAGE_ERROR_VALID = 'Erro in valid objects'

    const result = createResponseErrors([ 
      MESSAGE_ERROR_DB, 
      MESSAGE_ERROR_VALID 
    ])

    expect(result).toHaveProperty('content')
    expect(result).toHaveProperty('errors')

    expect(result.content).toBeNull()
    expect(result.errors).not.toBeUndefined()

    expect(result.errors).toContain(MESSAGE_ERROR_DB)
    expect(result.errors).toContain(MESSAGE_ERROR_VALID)
  })

  it('Create a response with errors (not array)', () => {
    const MESSAGE_ERROR = 'Errors dont array'

    expect(() => createResponseErrors({ message: 'test' })).toThrow(MESSAGE_ERROR)
  })
})