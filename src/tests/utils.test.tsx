import { eventsByDate, passedEvent } from "../utils/utils"

describe("Start page event sorting", () => {
  test("Should order events by date", () => {
    const dummyEvents = [
      {
        id: "event-test-1",
        time: new Date("2012-11-10"),
      },

      {
        id: "event-test-2",
        time: new Date("2033-11-10"),
      },

      {
        id: "event-test-3",
        time: new Date("2011-11-10"),
      },

      {
        id: "event-test-4",
        time: new Date("2260-11-10"),
      },

      {
        id: "event-test-5",
        time: new Date("2322-11-10"),
      },
    ]
    const ordered = eventsByDate(dummyEvents)
    expect(ordered[0].id).toBe("event-test-5")
  })
})

describe("Start page passed events", () => {
  test("Should return true if event has passed", () => {
    const dummyEvents = [
      {
        id: "event-test-1",
        time: new Date("2012-11-10"),
      },

      {
        id: "event-test-2",
        time: new Date("2033-11-10"),
      },

      {
        id: "event-test-3",
        time: new Date("2011-11-10"),
      },

      {
        id: "event-test-4",
        time: new Date("2260-11-10"),
      },

      {
        id: "event-test-5",
        time: new Date("2322-11-10"),
      },
    ]
    const currentEvent = passedEvent(dummyEvents[0].time)
    expect(currentEvent).toEqual(true)
  })
})
