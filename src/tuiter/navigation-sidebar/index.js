import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons'
const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = [{ name: "home", icon: faHome }, { name: "explore", icon: faHashtag }, { name: "notifications", icon: faBell }, { name: "messages", icon: faEnvelope }, { name: "bookmarks", icon: faBookmark }, { name: "lists", icon: faList }, { name: "profile", icon: faUser }, { name: "more", icon: faEllipsis }];
    const { currentUser } = useSelector((state) => state.user);
    return (
        <>
            <div className="list-group mb-2">
                {links.map(({ name, icon }) =>
                    <Link to={`/tuiter/${name}`} className={`list-group-item text-capitalize ${active === name ? "active" : ""} d-flex align-items-center`}>
                        <FontAwesomeIcon icon={icon} />{' '}<span className="d-none d-lg-none d-xl-block ms-2">{name}
                        </span>
                    </Link>
                )}
                {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
                {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
                {/* {currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>} */}

            </div>
            <div>
                <button type="button" className="btn btn-primary rounded-pill w-100">
                    <span className="text-break">Tweet</span>
                </button>
            </div>
        </>
    );
};
export default NavigationSidebar;

