
module.exports = (seconds) ->

  text = ""

  seconds = Math.floor seconds
  if seconds >= HR_SECS
    hours = seconds / HR_SECS
    roundedHours = Math.floor hours
    minutes = MIN_SECS * (hours - roundedHours)
    text += roundedHours + ":" if roundedHours > 0
  else
    minutes = seconds / MIN_SECS

  roundedMinutes = Math.floor minutes

  text += 0 if roundedHours > 0 and roundedMinutes < 10
  text += roundedMinutes + ":"

  seconds = MIN_SECS * (minutes - roundedMinutes)
  roundedSeconds = Math.floor seconds

  text += 0 if roundedSeconds < 10
  text += roundedSeconds

  return text
