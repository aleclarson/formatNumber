module.exports = function(seconds) {
  var hours, minutes, roundedHours, roundedMinutes, roundedSeconds, text;
  text = "";
  seconds = Math.floor(seconds);
  if (seconds >= HR_SECS) {
    hours = seconds / HR_SECS;
    roundedHours = Math.floor(hours);
    minutes = MIN_SECS * (hours - roundedHours);
    if (roundedHours > 0) {
      text += roundedHours + ":";
    }
  } else {
    minutes = seconds / MIN_SECS;
  }
  roundedMinutes = Math.floor(minutes);
  if (roundedHours > 0 && roundedMinutes < 10) {
    text += 0;
  }
  text += roundedMinutes + ":";
  seconds = MIN_SECS * (minutes - roundedMinutes);
  roundedSeconds = Math.floor(seconds);
  if (roundedSeconds < 10) {
    text += 0;
  }
  text += roundedSeconds;
  return text;
};

//# sourceMappingURL=map/toDuration.map
