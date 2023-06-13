import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";
import TuitsItem from "./tuitItem"

const TuitsList = () => {
    const { tuits, loading } = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <ul className="list-group">
            {loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitsItem tuit={tuit}
                    />
                )
            }
        </ul>
    );
}

export default TuitsList;