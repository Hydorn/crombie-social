import "../Profile/styleprofile.css";
import PostProvider from "../../Context/publicationContext";
import { NavBar } from "../Home/Parts/Navbar";
import { SideBarProfile } from "./Parts/SideBarProfile";
import { SharedPostProfile } from "./Parts/SharedPostsProfile";
import { Trends } from "../Home/Parts/Trends";
import { UserCard } from "./Parts/UserCard";


export const ProfilePage: React.FC<{}> = () => {
  return (
    <PostProvider>
      <div className="profileBody">
      <NavBar/>
      <div className="row m-0 profilerow">
        <div className="col-auto col-md-3 col-lg-2 col-xl-2 color-profilesidebar">
          <SideBarProfile/>
        </div>
        <div className="col-auto col-sm-9 col-md-6 col-lg-6 col-xl-6 position-sticky feed">
          <UserCard/>
          <hr className="m-2"></hr>
          <SharedPostProfile/>
        </div>
        <div className="col-lg-4 col-md-3 col-xl-4  color-trends">
        <Trends/>
        </div>
      </div>
    </div>
    </PostProvider>
    
  );
};
