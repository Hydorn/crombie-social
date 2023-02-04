import "../Home/stylehome.css";
import { SideBar } from "./Parts/SideBar";
import { CreatePost } from "./Parts/CreatePost";
import { Trends } from "./Parts/Trends";
import { NavBar } from "./Parts/Navbar";
import PostProvider from "../../Context/publicationContext";
import { SharedPost } from "./Parts/SharedPosts";

export const Homepage: React.FC<{}> = () => {
  return (
    <PostProvider>
      <div className="homeBody">
      <NavBar></NavBar>
      <div className="row m-0">
        <div className="col-auto col-md-3 col-lg-2 color-sidebar">
          <SideBar></SideBar>
        </div>
        <div className="col-auto col-sm-9 col-md-6 col-lg-6 fluid">
          <CreatePost></CreatePost>
          <hr className="m-2"></hr>
          <SharedPost/>
        </div>
        <div className="col-lg-4 col-md-3 d-none d-sm-none d-md-none d-lg-block d-xl-block  color-trends">
          <Trends/>
        </div>
      </div>
    </div>
    </PostProvider>
    
  );
};
