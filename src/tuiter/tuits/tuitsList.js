import React from "react";
import { useSelector } from "react-redux";
import TuitsItem from "./tuitItem"
const TuitsList = () => {
    const { tuits } = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitsItem
                        tuit={tuit}
                    />
                )
            }
        </ul>
    );
}

export default TuitsList;