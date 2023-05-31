import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import Notifications from "./notifications-screen";
import Messages from "./messages-screen";
import List from "./lists-screen";
import More from "./more-screen";
import WhoToFollowList from "./who-to-follow-list";
function Tuiter() {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="col-xl-2 col-1">
                    <NavigationSidebar />
                </div>
                <div className="col-xl-6 col-lg-7 col-11">
                    <Routes>
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/explore" element={<ExploreScreen />} />
                        <Route path="/bookmarks" element={<BookmarksScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/lists" element={<List />} />
                        <Route path="/more" element={<More />} />
                    </Routes>
                </div>
                <div className="col-4 d-none d-md-none d-lg-block">
                    <WhoToFollowList />
                </div>
            </div>
        </div>
    );
}
export default Tuiter;
