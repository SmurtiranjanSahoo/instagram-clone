import {
  CREATEPOST_BEGIN,
  CREATEPOST_SUCCESS,
  CREATEPOST_FAILURE,
  FETCH_ALLPOST_BEGIN,
  FETCH_ALLPOST_SUCCESS,
  FETCH_ALLPOST_FAILURE,
} from "../actions/constants/action-types";
import { createPost, getAllPosts } from "../helper/apicalls";
import { isAutheticated } from "../auth/auth";

//post create
export const postCreate = (post) => {
  return (dispatch) => {
    dispatch(postCreateBegin(post));
    const { user, token } = isAutheticated();
    createPost(user._id, token, post)
      .then((data) => {
        if (data.error) {
          dispatch(postCreateFailure(data.error));
        }
        dispatch(postCreateSuccess());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(postCreateFailure(errMsg));
      });
  };
};

export const postCreateBegin = (post) => ({
  type: CREATEPOST_BEGIN,
  payload: post,
});

export const postCreateSuccess = () => ({
  type: CREATEPOST_SUCCESS,
});

export const postCreateFailure = (error) => ({
  type: CREATEPOST_FAILURE,
  payload: error,
});

//get all posts
export const fetchAllPost = () => {
  return (dispatch) => {
    dispatch(fetchAllPostBegin());
    const { user, token } = isAutheticated();
    getAllPosts(user._id, token)
      .then((data) => {
        if (data.error) {
          dispatch(fetchAllPostFailure(data.error));
        }
        // console.log(data);
        dispatch(fetchAllPostSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchAllPostFailure(errMsg));
      });
  };
};

export const fetchAllPostBegin = () => ({
  type: FETCH_ALLPOST_BEGIN,
});

export const fetchAllPostSuccess = (allpost) => ({
  type: FETCH_ALLPOST_SUCCESS,
  payload: allpost,
});

export const fetchAllPostFailure = (error) => ({
  type: FETCH_ALLPOST_FAILURE,
  payload: error,
});
