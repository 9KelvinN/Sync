from calendar import calendar
from time import strftime
from ics import Calendar
from datetime import date
import requests
import arrow
import matplotlib.pyplot as plt


def merge(intervals):
    intervals.sort(key= lambda x:x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])

    return merged
days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

def graph_intervals(events):
    fig, ax = plt.subplots()
    ax.set_yticks(range(24))
    ax.set_yticklabels([f'{24- i -1}:00' for i in range(24)])
    ax.set_xticks(range(7))
    cur_day = arrow.now().weekday()
    ax.set_xticklabels([f'{days_of_week[(cur_day+i)% len(days_of_week)]}' for i in range(len(days_of_week))])
    for event in events:
        # print(event[0],event[0].hour)
        # print(event[1],event[1].hour)
        event_day = event[0].weekday()
        ax.bar((event_day - cur_day + len(days_of_week))% len(days_of_week),height=event[1].hour-event[0].hour,bottom=24- event[1].hour -1, color = "blue")
    plt.show()


def meetup():
    calendars = []
    print("Type in URLS to procced. Once done inputting URLS, input 'c'")
    done = False
    while(not done):
        url = input("URL: ")
        if (url == 'c'):
            done = True
        else: 
            calendars.append(Calendar(requests.get(url).text))
    free_time = merge_events(calendars)
    graph_intervals(free_time)
    
def test():
    calendars = []
    calendars.append(Calendar(requests.get("https://calendar.google.com/calendar/ical/8cfc8ccf52f37e6c0ceb1b105d3e1d38462f24cb718f2468ac52e5aa0b2156d8%40group.calendar.google.com/public/basic.ics").text))
    calendars.append(Calendar(requests.get("https://calendar.google.com/calendar/ical/7f18831ef7f8a37f664cc52fea8f40e081a0947adc620a5b88846bd2944c8e39%40group.calendar.google.com/public/basic.ics").text))
    free_time = merge_events(calendars)
    graph_intervals(free_time)


def flex():
    calendars = []
    print("Finding a flex time for you: ")
    url = input("URL: ")
    calendars.append(Calendar(requests.get(url).text))
    hours = int(input("How many hours would you like to flex for? "))

    free_time = merge_events(calendars)
    slots = []
    flex_slots = []
    for event in free_time:
        if ((event[1].day*24 + event[1].hour) - (event[0].day*24 + event[0].hour) >= hours):
            slots.append(event)
    if (len(slots) == 0):
        print("Unfortunately there are no available times to flex")
    elif (len(slots) == 1):
        flex_slots.append(slots[0])
    else:
        flex_slots.append(slots[0])
        flex_slots.append(slots[len(slots) - 1])
    # print("\n SLOTS Times:", *slots, sep = "\n")
    # print("\n flex Times:", *flex_slots, sep = "\n")
    graph_intervals(flex_slots)

# url = "https://calendar.google.com/calendar/ical/91e9c1bb45e7f594d3ffc3502bc18653fa61a2bfdfc3038d0a9df7c6f0001065%40group.calendar.google.com/public/basic.ics"
# url2 = "https://calendar.google.com/calendar/ical/c_3db9bc273afe133ba963c03098c882aa4e893a8d5822c4a1072a7d6d667508ac%40group.calendar.google.com/public/basic.ics"

def merge_events(calendars):
    all_events = []

    la=arrow.now('America/Los_Angeles').tzinfo
    cur_time = arrow.utcnow().astimezone(la)
    deadline = arrow.utcnow().shift(days=7)
    for cal in calendars:
        for event in cal.events:
            if (event.end > cur_time and event.end < deadline ):
                all_events.append([event.begin.astimezone(la), event.end.astimezone(la)])
    merged_events = merge(all_events)

    free_time = []
    i = 0
    start = "Start: %d-%m-%y  %H:%M:%S"
    end = "End: %d-%m-%y  %H:%M:%S"
    for event in merged_events:
        if (i == 0 and cur_time < merged_events[0][0]):
            # free_time.append([cur_time.strftime(start), merged_events[0][0].strftime(end)])
            free_time.append([cur_time, merged_events[0][0]])
        if (i > 0 and i < len(merged_events)):
            # free_time.append([merged_events[i-1][1].strftime(start), merged_events[i][0].strftime(end)])
            free_time.append([merged_events[i-1][1], merged_events[i][0]])
        i+=1
    # print("\n Available Times:", *free_time, sep = "\n")
    # for calendar in calendars:
    #     graph_intervals(calendar)
    return free_time
    


def cli():
    print("What would you like to do? ")
    option = input("Meetup? Flex?\n")
    match option:
        case "meetup":
            meetup()
        case "flex":
            flex()


cli()
# test()