def add_time(start, duration, day=False):
    week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    suffix = ""
    initial_hour = time_split(start)["hour"]
    initial_period = time_split(start)["period"]
    duration_hour = time_split(duration, True)["hour"]

    initial_minutes = time_split(start)["minutes"]
    duration_minutes = time_split(duration, True)["minutes"]

    hours = initial_hour + duration_hour
    minutes = initial_minutes + duration_minutes
    index_day = 0
    week_day = ""

    if day:
        index_day = week.index(day.lower().capitalize())
        week_day = week[index_day].capitalize()

    if minutes >= 60:
        minutes = minutes % 60
        hours += 1
        if initial_period == "PM":
            suffix = "(next day)"

    if hours >= 12 and hours < 24:
        if hours > 12:
            hours = hours % 12

        if initial_period == "AM":
            initial_period = "PM"
        else:
            initial_period = "AM"
            suffix = "(next day)"

    if hours >= 24:
        if type(hours / 24) is int:
            initial_period = "PM"
        else:
            initial_period = "AM"

        if round(hours / 24) < 2:
            suffix = "(next day)"
            if day:
                index_day = week.index(day.lower().capitalize())
                add_index = (index_day + round(hours / 24)) % 7
                week_day = week[add_index].capitalize()
        else:
            if day:
                index_day = week.index(day.lower().capitalize())
                add_index = (index_day + round(hours / 24)) % 7
                week_day = week[add_index].capitalize()
            suffix = f"({round(hours/24)} days later)"
        hours = hours % 24
        if hours > 12 and hours < 24:
            hours = hours % 12

    new_time = formatter_res(hours, minutes, initial_period, week_day, suffix)

    return new_time


def formatter_res(hour, minutes, period, day=False, suffix=False):
    if day and suffix:
        return f"{hour}:{minutes:02d} {period}, {day} {suffix}"
    if suffix and not day:
        return f"{hour}:{minutes:02d} {period} {suffix}"
    if day and not suffix:
        return f"{hour}:{minutes:02d} {period}, {day}"

    return f"{hour}:{minutes:02d} {period}"


def time_split(time, isDuration=False, week_day=False):
    time_arr = time.split(":")
    hour = int(time_arr[0])
    if isDuration:
        minutes = int(time_arr[1])
        period = ""
    else:
        minutes = int(time_arr[1].split()[0])
        period = time_arr[1].split()[1]
    obj = {"hour": hour, "minutes": minutes, "period": period, "week-day": week_day}
    return obj


print(add_time("9:15 PM", "5:30"))  #  "2:45 AM (next day)"
