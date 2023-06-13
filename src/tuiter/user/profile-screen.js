import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async () => {
        await dispatch(updateUserThunk(profile));
    };
    // useEffect(() => {
    //     const { payload } = dispatch(profileThunk());
    //     setProfile(payload);
    // }, currentUser);
    return (<div>
        <h1>Profile Screen</h1>
        {profile && (<div>
            <div className="mb-2">
                <label>First Name</label>
                <input type="text" value={profile.firstName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, firstName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
            </div>
            <div className="mb-2">
                <label>Last Name</label>
                <input type="text" value={profile.lastName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, lastName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
            </div></div>
        )}
        <div>
            <button className="btn btn-primary me-2"
                onClick={async () => {
                    await dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}>                   Logout</button>
            <button className="btn btn-primary" onClick={save}>Save  </button>
        </div>
    </div>
    ); // see below
}
export default ProfileScreen;
