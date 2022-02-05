function formatDuration (seconds) {
    if (!seconds) return "now"

    let years, days, hours, minutes;

    years = Math.floor(seconds / 31536000)
    seconds = seconds % 31536000
    days = Math.floor(seconds / 86400)
    seconds = seconds % 86400
    hours = Math.floor(seconds / 3600)
    seconds = seconds % 3600
    minutes = Math.floor(seconds / 60)
    seconds = seconds % 60

    const stringYears = years ? years > 1 ? `${years} years` : `${years} year` : ""
    const stringDays = days ? days > 1 ? `${days} days` : `${days} day` : ""
    const stringHours = hours ? hours > 1 ? `${hours} hours` : `${hours} hour` : ""
    const stringMinutes = minutes ? minutes > 1 ? `${minutes} minutes` : `${minutes} minute` : ""
    const stringSeconds = seconds ? seconds > 1 ? `${seconds} seconds` : `${seconds} second` : ""

    let timesArr = [stringYears, stringDays, stringHours, stringMinutes, stringSeconds].filter(elem => elem !== "")

    if (timesArr.length >= 2) {
        return timesArr.slice(0, -1).join(', ') + ' and ' + timesArr[timesArr.length - 1]
    }

    return timesArr.join()
}