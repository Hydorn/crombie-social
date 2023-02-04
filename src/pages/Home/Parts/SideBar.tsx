import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "react-bootstrap/Image";
import "./PartsStyle.css";
import { NavLink, useNavigate } from "react-router-dom";
import { defaultUser } from "../../../components/Ejemplo";

interface Route {
  path: string;
  name: string;
  icon: string;
}
export const Routes: Route[] = [
  { path: "/home", name: "Home", icon: "bi bi-house-fill" },
  { path: "/profile", name: "Profile", icon: "bi bi-person-fill" },
  { path: "/home", name: "Notifications", icon: "bi bi-bell-fill" },
  { path: "/home", name: "Messages", icon: "bi bi-chat-fill" },
  { path: "/home", name: "More", icon: "bi bi-three-dots" },
];

export const SideBar: React.FC<{}> = ({}) => {

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  }

  
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-auto col-md-12 col-lg-12 min-vh-100 bg-dark sildeBar">
          <span className="ms-1 d-none d-md-inline p-1">HOME</span>
          <div className="userBox">
            {/* DatosUsuario - Foto - Nombre*/}
            <Image
              src={defaultUser.photo}
              className="img-fluid"
              alt="logo"
              width={25}
              roundedCircle
              fluid
            ></Image>
            <span className="ms-1 d-none d-md-inline p-1">
              @{defaultUser.username}
            </span>
          </div>
          {Routes.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon text-white">
                <i className={item.icon}></i>
                <span className="ms-1 d-none d-md-inline">{item.name}</span>
              </div>
            </NavLink>
          ))}
          <button
            className="btn btn-outline-secondary text-white text-start p-0 fs-3"
            type="submit"
            onClick={logOut}
          >
            <i className="bi bi-door-closed-fill"></i>
            <span className="ms-1 d-none d-md-inline p-1">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
