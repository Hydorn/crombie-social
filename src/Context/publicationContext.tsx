import React, { createContext, useState } from "react";
import { Post } from "../models/Posts";
import { defaultData, defaultUser } from "../components/Ejemplo";

export type ContextPost = {
  data: Post[];
  media: string[];
  userPosts: Post[];
  createPost: (post: Post) => void;
  uploadMedia: (media: string) => void;
  clearMediaList: () => void;
  editPost: (post: Post) => void;
  deleteImageFromMedia: (media: string) => void;  
};

export const Context = createContext<ContextPost| null>(null)

interface Props {
  children?: React.ReactNode
}

const TwitterProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<Post[]>(defaultData)
  const [media, setMedia] = useState<string[]>([])

  const createPost = (post:Post) => {
    post = {
      ...post,
      id: Math.random(),
      user: defaultUser,
      likes: 0,
      repost: 0,
      comments: 0,
      date: Date.now()
    }
    setData([post, ...data])
  }

  const uploadMedia = (mediaToUpdate: string) => {
    if (media.length < 4) {
      setMedia([...media, mediaToUpdate])
    }
  }

  const deleteImageFromMedia = (mediaToDelete: string) => {
    const newMedia = media.filter(item => item !== mediaToDelete)
    setMedia(newMedia)
  }

  const clearMediaList = () => {
    setMedia([])
  }

  const editPost = (post: Post) => {
    const newData = data.map((item) => item.id === post.id ? post : item)
    setData(newData)
  }

  const userPosts =  data.filter(posts => posts.user.id === defaultUser.id);  

  return (
    <Context.Provider value={{ data, media, userPosts, createPost, uploadMedia, clearMediaList, editPost, deleteImageFromMedia }}>
      {children}
    </Context.Provider>
  )
}

export default TwitterProvider

