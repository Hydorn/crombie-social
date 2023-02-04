import React, { useContext, useState } from "react";
import Image from "react-bootstrap/Image";
import { Post } from "../../../models/Posts";
import "./PartsStyle.css";
import moment from "moment";
import {
  ContextPost,
  Context,
} from "../../../Context/publicationContext";

interface Props {
  post: Post;
}

export const PostCardProfile: React.FC<Props> = ({ post }) => {
  const { date, post: text, user, images, likes, repost, comments } = post;
  const { username } = user;
  const dateFormatted = moment(date).startOf("date").fromNow();

  const { editPost } = useContext(Context) as ContextPost;

  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isRepostClicked, setIsRepostClicked] = useState(false);

  const handleLikes = () => {
    if (!isLikeClicked) {
      post.likes++;
      setIsLikeClicked(true);
    } else {
      post.likes--;
      setIsLikeClicked(false);
    }
    editPost(post);
  };

  const handleRepost = () => {
    if (!isRepostClicked) {
      post.repost++;
      setIsRepostClicked(true);
    } else {
      post.repost--;
      setIsRepostClicked(false);
    }
    editPost(post);
  };


  return (
    <div className="container-fluid card-style">
      <div className="row p-3">        
        <div className="col-auto p-0">
          {/* DatosUsuario - Foto - Nombre*/}
          <div className="text-white">
            <label className="d-inline">@{username}</label>
            <label className="d-inline h6 p-3">{dateFormatted}</label>
          </div>
          <p className="text-white">{text}</p>
          {images?.map((image, key) => (
            <div key={key}>
              <Image src={image} className="img-fluid" alt="logo" fluid></Image>
            </div>
          ))}
        </div>
        <div className="flex mr-2 likes-btn">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-chat-fill"></i>
            <span className="px-2">{comments}</span>
          </button>
          <button className="btn btn-outline-secondary" onClick={handleRepost}>
            <i className="bi bi-reply-all-fill"></i>
            <span className="px-2">{repost}</span>
          </button>
          <button className="btn btn-outline-secondary"  onClick={handleLikes}>
            <i className="bi bi-heart-fill"></i>
            <span className="px-2">{likes}</span>
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-share-fill"></i>
          </button>
        </div>
      </div>

      <hr className="m-0"></hr>
    </div>
  );
};
