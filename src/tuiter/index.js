import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import Notifications from "./notifications-screen";
import Messages from "./messages-screen";
import List from "./lists-screen";
import More from "./more-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import authReducer from "./reducers/auth-reducer";
import RegisterScreen from "./user/register-screen";
import LoginScreen from "./user/login-screen";

const store = configureStore(
    { reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer } });

function Tuiter() {
    return (
        <Provider store={store}>
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
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />

                        </Routes>
                    </div>
                    <div className="col-4 d-none d-md-none d-lg-block">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;
