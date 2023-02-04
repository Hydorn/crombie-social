import { User } from "../models/User";
import { Post } from "../models/Posts";

const users: User[] = [
  {
    id: 1,
    username: "usuario1",
    email: "usuario1@user.com",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    follows: 153,
    followers: 310,
  },
  {
    id: 2,
    username: "usuario2",
    email: "usuario2@user.com",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    follows: 432,
    followers: 275,
  },
  {
    id: 3,
    username: "usuario3",
    email: "usuario3@user.com",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    follows: 358,
    followers: 632,
  },
  {
    id: 4,
    username: "usuario4",
    email: "usuario4@user.com",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3CoKV-KPmgSiKNPRnhaxvsKqucnGBQ2drQ&usqp=CAU",
    follows: 529,
    followers: 653,
  },
];
export const defaultData: Post[] = [
  {
    id: 1,
    post: "Un día en la oficina",
    user: users[3],
    likes: 58,
    comments: 5,
    repost: 10,
    date: Date.now(),
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQXYjEzbN9JaQBdlIGaqDWEgbN8KffySgZQ&usqp=CAU",
    ],
  },
  {
    id: 2,
    post: "Buen día!",
    user: users[0],
    likes: 84,
    comments: 15,
    repost: 100,
    date: Date.now(),
    images: ["https://media.tenor.com/1wswTEx2a1AAAAAM/anyone-hello.gif"],
  },
  {
    id: 3,
    post: "Nada como otro día con ellos",
    user: users[0],
    likes: 145,
    comments: 20,
    repost: 105,
    date: Date.now(),
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOK1wUTj6l_yxFhUP-WXOSzAt117hl8cUMpg&usqp=CAU",
    ],
  },
  {
    id: 4,
    post: "Mi día laboral",
    user: users[1],
    likes: 243,
    comments: 5,
    repost: 151,
    date: Date.now(),
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UJtcWI3kXk7ffF_XO3XPjWjJ57mqKHJdZw&usqp=CAU",
    ],
  },
  {
    id: 5,
    post: "In the night, I lie and look up at you when the morning comes, I watch you rise there's a paradise they couldn't capture that bright infinity inside your eyes",
    user: users[2],
    likes: 500,
    comments: 5,
    repost: 10,
    date: Date.now(),
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_6UxCAuWjqcekYszJ4EqKcNraGNvm3SAXQ&usqp=CAU",
    ],
  },
  {
    id: 6,
    post: "Nunca pares de sonreir, con una simple sonrisa le puedes mejorar el día a alguien.",
    user: users[3],
    likes: 100,
    comments: 5,
    repost: 10,
    date: Date.now(),
  },
];

export const defaultUser: User = users[3];
