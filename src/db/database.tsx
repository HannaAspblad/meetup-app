interface UsersData {
  id: string
  username: string
  password: string
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
  authorId: string
  comment: string
}

export const users: UsersData[] = [
  {
    id: "user-abc",
    username: "hanna",
    password: "lösenord",
  },

  {
    id: "user-def",
    username: "pontus",
    password: "lösenord",
  },
  {
    id: "user-ghi",
    username: "lisa",
    password: "lösenord",
  },
  {
    id: "user-jkl",
    username: "joe",
    password: "lösenord",
  },
]

export const events: EventsData[] = [
  {
    id: "event-abc",
    title: "Ugly cars lovers meetup",
    location: "Stockholm",
    time: new Date("2011-11-10"),
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
    time: new Date("2023-05-13"),
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
    time: new Date("2008-05-13"),
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
]
