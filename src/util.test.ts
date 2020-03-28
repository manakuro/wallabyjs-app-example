import { getAnimal } from './util';

describe('getAnimal', () => {
  it('should get CATS when passing code 1', () => {
    expect(getAnimal(1)).toEqual('CATS')
  })
})
