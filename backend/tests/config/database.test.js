const configDatabase = require('../../src/config/database')

describe('Configure database', () => {
  it('Get properties of database config', () => {
    expect(configDatabase).toHaveProperty('database')
    expect(configDatabase).toHaveProperty('username')
    expect(configDatabase).toHaveProperty('password')
    expect(configDatabase).toHaveProperty('host')
    expect(configDatabase).toHaveProperty('port')
  })
})