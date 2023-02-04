import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { Post,  PostSchema } from '../models/Posts'
import { Context, ContextPost } from '../Context/publicationContext'


export const useCreate = () => {
  const { createPost, media, clearMediaList, deleteImageFromMedia } = useContext(Context) as ContextPost

  const methods = useForm<Post>({
    resolver: yupResolver(PostSchema)
  })

  const { register, handleSubmit, reset } = methods;

  const onSubmit = (post: Post) => {
    post.images = media
    createPost(post)
    clearMediaList()
    reset()
  }

  return {
    media,
    methods,
    register,
    handleSubmit,
    onSubmit,
    deleteImageFromMedia
  }
}
