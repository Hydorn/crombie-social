import React, { useContext } from "react";
import { Context, ContextPost } from "../../../Context/publicationContext";
import "./PartsStyle.css";
import { PostCard } from "./PostCard";

export const SharedPost: React.FC<{}> = ({}) =>{
  const { data } = useContext(Context) as ContextPost;

  return (
    <div className="container-fluid shared-styles">
      { data?.map((post, key) => <PostCard post={post} key={key}/>)}
    </div>
  );
};
