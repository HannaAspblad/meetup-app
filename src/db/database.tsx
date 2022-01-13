interface UsersData {
  id: string
  username: string
  password: string
  bookedEvents: BookedEvents[]
}

interface EventsData {
  id: string
  title: string
  location: string
  time: any
  comments: CommentsData[]
}

interface CommentsData {
  id: string
  authorId: any
  comment: string
}
interface BookedEvents {
  id: string
}

export const users: UsersData[] = [
  {
    id: "user-abc",
    username: "hanna",
    password: "password",
    bookedEvents: [{ id: "event-abc" }, { id: "event-def" }],
  },

  {
    id: "user-def",
    username: "pontus",
    password: "password",
    bookedEvents: [{ id: "event-abc" }],
  },
  {
    id: "user-ghi",
    username: "lisa",
    password: "password",
    bookedEvents: [],
  },
  {
    id: "user-jkl",
    username: "joe",
    password: "password",
    bookedEvents: [],
  },
]

export const events: EventsData[] = [
  {
    id: "event-abc",
    title: "Ugly cars lovers meetup",
    location: "Stockholm",
    time: new Date("2022-11-10"),
    comments: [
      {
        id: "comment-abc",
        authorId: "user-jkl",
        comment: "pretty boring meetup",
      },

      {
        id: "comment-def",
        authorId: "user-abc",
        comment: "i agree",
      },
    ],
  },

  {
    id: "event-def",
    title: "Prettiest ponies",
    location: "Stockholm",
    time: new Date("2022-05-13"),
    comments: [
      {
        id: "comment-ghi",
        authorId: "user-jkl",
        comment: "loved to meet ponies",
      },

      {
        id: "comment-jkl",
        authorId: "user-abc",
        comment: "i don't like horses",
      },

      {
        id: "comment-mno",
        authorId: "user-ghi",
        comment: "i made new pony friends",
      },
    ],
  },

  {
    id: "event-ghi",
    title: "Even prettier ponies",
    location: "Stockholm",
    time: new Date("2022-07-13"),
    comments: [],
  },

  {
    id: "event-jkl",
    title: "Tennis world wide",
    location: "Borås",
    time: new Date("2022-01-03"),
    comments: [],
  },

  {
    id: "event-mno",
    title: "Furniture friends",
    location: "Malmö",
    time: new Date("2021-07-11"),
    comments: [
      {
        id: "comment-abc",
        authorId: "user-jkl",
        comment: "pretty boring meetup",
      },

      {
        id: "comment-def",
        authorId: "user-abc",
        comment: "i agree",
      },
    ],
  },

  {
    id: "event-pqr",
    title: "Cosplay nerds",
    location: "Linköping",
    time: new Date("2021-09-30"),
    comments: [
      {
        id: "comment-abc",
        authorId: "user-jkl",
        comment: "pretty boring meetup",
      },

      {
        id: "comment-def",
        authorId: "user-abc",
        comment: "i agree",
      },
    ],
  },
]
