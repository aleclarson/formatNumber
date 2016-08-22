
spliceString = require "spliceString"

module.exports = (x) ->

  text = "" + count
  index = text.length

  while index > 3
    index -= 3
    text = spliceString text, index, 0, ","

  return text
