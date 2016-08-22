
module.exports = (x) ->

  if x >= 1e6
    x = Math.floor(x / 1e5) / 1e1
    return x + "M"

  if x >= 1e3
    x = Math.floor(x / 1e2) / 1e1
    return x + "k"

  return "" + x
