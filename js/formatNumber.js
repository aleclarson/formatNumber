var HR_SECS, MIN_SECS, Number, assertType, formatters, spliceString;

Number = require("Nan").Number;

spliceString = require("spliceString");

assertType = require("assertType");

MIN_SECS = 60;

HR_SECS = 60 * MIN_SECS;

module.exports = function(value, format) {
  var formatter;
  assertType(value, Number);
  assertType(format, String);
  formatter = formatters[format];
  if (!formatter) {
    throw Error("Invalid format: '" + format + "'");
  }
  return formatter(value);
};

exports.formatters = formatters = {
  commas: require("./insertCommas"),
  short: require("./shorten"),
  duration: require("./toDuration")
};

//# sourceMappingURL=map/formatNumber.map
