import React, { useContext } from "react";
import { Context, ContextPost } from "../../../Context/publicationContext";
import { PostCardProfile } from "./PostCardProfile";
import "./PartsStyle.css";


export const SharedPostProfile: React.FC<{}> = ({}) =>{
  const { userPosts } = useContext(Context) as ContextPost;

  return (
    <div className="container-fluid p-0 mypost-style">
      <h4 className="text-white text-center mt-3">Your Posts</h4>
      { userPosts?.map((post, key) => <PostCardProfile post={post} key={key}/>)}
    </div>
  );
};
