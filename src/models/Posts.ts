import { User } from "./User";
import * as yup from "yup";

export interface Post {
  id: number;
  post: string;
  images?: string[];
  user: User;
  likes: number;
  comments: number;
  repost: number;
  date: number;
}

export const PostSchema = yup.object({
  post: yup
    .string()
    .min(1)
    .max(280, "Maximum: 255 characters")
    .required("Required field")
});
