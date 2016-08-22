var HR_SECS, MIN_SECS, Nan, assertType, formatters, spliceString;

spliceString = require("spliceString");

assertType = require("assertType");

Nan = require("Nan");

MIN_SECS = 60;

HR_SECS = 60 * MIN_SECS;

module.exports = function(value, format) {
  var formatter;
  if (Nan.test(value)) {
    throw Error("Unexpected NaN value!");
  }
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
