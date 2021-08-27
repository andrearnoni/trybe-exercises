function handleNumber(number) {
  if (number > 0) {
    return 'positivo'
  } else if (number < 0) {
    return 'negativo'
  } else if (number === 0) {
    return 'neutro'
  }

  if (typeof number !== Number) {
    return 'o valor deve ser um número'
  }
}

module.exports = { handleNumber };