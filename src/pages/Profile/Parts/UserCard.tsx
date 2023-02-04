import React from "react";
import { defaultUser } from "../../../components/Ejemplo";

export const UserCard: React.FC<{}> = ({}) => {
  return (
    <div className="container-fluid">
      <div className="row mypost-style">
        <div className="col-4 picturebox">
          <img
            src={defaultUser.photo}
            className="img-fluid profilepicture"
            alt="profile"
          ></img>
        </div>
        <div className="col-8  usercard-style">
          <span className="ms-1 d-none d-md-inline p-1">
            @{defaultUser.username}
          </span>
          <div>
            <i className="bi bi-calendar2-event-fill"></i>
            <span className="p-2">Joined on 01/20/2023</span>
          </div>
          <div>
            <span className="p-2">{defaultUser.followers} Followers</span>
            <span className="p-2">{defaultUser.follows} Follows </span>
          </div>
          <div>
            <button className="btn btn-outline-secondary text-white" >Edit profile</button>
            <button className="btn btn-outline-secondary text-white" >Change password</button>
          </div>
        </div>
      </div>
    </div>
  );
};
