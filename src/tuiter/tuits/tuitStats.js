import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRotate, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from 'react-redux'
import { updateLike } from '../reducers/tuits-reducer'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { FiThumbsDown } from "react-icons/fi"
import { IoIosThumbsDown } from "react-icons/io"

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const updateLikeHandler = (id) => {
        dispatch(updateLike(id));
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-2">
                    <label>
                        <FontAwesomeIcon icon={faComment} />
                        <span> {tuit.replies}</span>
                    </label>
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faRotate} />
                    <span> {tuit.retuits}</span>
                </div>
                <div className="col-2">
                    {/* <span onClick={() => updateLikeHandler(tuit._id)}></span> */}
                    {tuit.liked &&
                        <FaHeart style={{ color: "red" }}
                            className="text-danger"
                            onClick={() => {
                                dispatch(updateTuitThunk({ ...tuit, likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1, liked: !tuit.liked }))
                            }}

                        />}
                    {!tuit.liked &&
                        <FaRegHeart
                            className="text-danger"
                            onClick={() => {
                                dispatch(updateTuitThunk({ ...tuit, likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1, liked: !tuit.liked }))
                            }}

                        />}

                    <span className="ms-2">{!tuit.likes ? 0 : tuit.likes}</span>
                </div>

                <div className="col-2">
                    {/* <span onClick={() => updateLikeHandler(tuit._id)}></span> */}
                    {tuit.disliked &&
                        <IoIosThumbsDown
                            // className="text-danger"
                            onClick={() =>
                                dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1, disliked: !tuit.disliked }))
                            }
                        />}
                    {!tuit.disliked &&
                        <FiThumbsDown
                            // className="text-danger"
                            onClick={() =>
                                dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1, disliked: !tuit.disliked }))
                            }
                        />}
                    <span className="ms-2">{!tuit.dislikes ? 0 : tuit.dislikes}</span>
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
            </div >
        </>
    )
}
export default TuitStats