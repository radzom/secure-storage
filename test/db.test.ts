import db from '../src/db'

/**
 * Dummy test
 */
describe('db test', () => {
  it('works if db is truthy', () => {
    expect(db).toBeTruthy()
  })

  it('get the value it has written', async () => {
    const testValue = { you: true }
    await db.put('hey', testValue)
    const value = await db.get('hey', { asBuffer: false })
    expect(value).toEqual(testValue)
  })
})
