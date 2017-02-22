exports.convert = function (country, amount) {
  let arr = String(amount).split('')

  for (let i = arr.length - 3; i >= 0; i -= 3) {
    arr.splice(i, 0, ',')
  }

  let currency = [
    {
      country: 'USA',
      result: `${arr.join('')} USD`
    },
    {
      country: 'INA',
      result: `Rp. ${arr.join('')}`
    },
    {
      country: 'SGD',
      result: `${arr.join('')} SGD`
    },
    {
      country: 'EUR',
      result: `${arr.join('')} EUR`
    },
    {
      country: 'CAD',
      result: `${arr.join('')} CAD`
    }
  ]

  let getCurr
  currency.forEach(function (x) {
    if (x.country === country.toUpperCase()) {
      getCurr = x.result
    }
  })

  return getCurr
}
