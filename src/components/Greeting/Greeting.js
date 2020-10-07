
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    var timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }

    return timeOfDay
}

export default Greeting