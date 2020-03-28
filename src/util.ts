export const getAnimal = (code: number) => {
  if (code === 1) return 'CATS'
  if (code === 2) return 'DOGS'
  if (code === 3) return 'RABBITS'

  return null
}
