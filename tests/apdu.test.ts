import { codes } from '../src/apdu'
import { apdu } from '../src/index'

it('Description and status are correct', () => {
  codes.forEach(({ code, description, isOk }) => {
    const { description: descFound, isOk: isOkFound } = apdu.getCodeDescription(parseInt(code, 16))
    expect(descFound).toBe(description)
    expect(isOkFound).toBe(!!isOk)
  })
})
