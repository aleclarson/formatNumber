var spliceString;

spliceString = require("spliceString");

module.exports = function(x) {
  var index, text;
  text = "" + count;
  index = text.length;
  while (index > 3) {
    index -= 3;
    text = spliceString(text, index, 0, ",");
  }
  return text;
};

//# sourceMappingURL=map/insertCommas.map
