import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRotate, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { updateLike } from '../reducers/tuits-reducer'
import { FaHeart, FaRegHeart } from "react-icons/fa"

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const updateLikeHandler = (id) => {
        dispatch(updateLike(id));
    }
    return (
        <>
            <div className="row mt-3">
                <div className="col-3">
                    <label>
                        <FontAwesomeIcon icon={faComment} />
                        <span> {tuit.replies}</span>
                    </label>
                </div>
                <div className="col-3">
                    <FontAwesomeIcon icon={faRotate} />
                    <span> {tuit.retuits}</span>
                </div>
                <div className="col-3">
                    <span onClick={() => updateLikeHandler(tuit._id)}>
                        {/* <FontAwesomeIcon icon={faHeart} color={tuit.liked ? "red" : ""} /> */}
                        {tuit.liked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
                        <span> {tuit.likes}</span></span>

                </div>
                <div className="col-3">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
            </div>
        </>
    )
}
export default TuitStats