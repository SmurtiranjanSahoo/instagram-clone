import {
  CREATEPOST_BEGIN,
  CREATEPOST_SUCCESS,
  CREATEPOST_FAILURE,
  FETCH_ALLPOST_BEGIN,
  FETCH_ALLPOST_SUCCESS,
  FETCH_ALLPOST_FAILURE,
  FETCH_POST_BEGIN,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  DELETE_POST_BEGIN,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "../actions/constants/action-types";
import {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
} from "../helper/apicalls";
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

//fetch all posts
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

//fetch post
export const fetchPost = (postId) => {
  return (dispatch) => {
    dispatch(fetchPostBegin());
    getPost(postId)
      .then((data) => {
        if (data.error) {
          dispatch(fetchPostFailure(data.error));
        }
        // console.log(data);
        dispatch(fetchPostSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchPostFailure(errMsg));
      });
  };
};

export const fetchPostBegin = () => ({
  type: FETCH_POST_BEGIN,
});

export const fetchPostSuccess = (post) => ({
  type: FETCH_POST_SUCCESS,
  payload: post,
});

export const fetchPostFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

//fetch post
export const deletePost = (postId) => {
  return (dispatch) => {
    dispatch(fetchPostBegin());
    const { user, token } = isAutheticated();
    deletePost(postId, user._id, token)
      .then((data) => {
        if (data.error) {
          dispatch(fetchPostFailure(data.error));
        }
        dispatch(fetchPostSuccess());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchPostFailure(errMsg));
      });
  };
};

export const fetchPostBegin = () => ({
  type: DELETE_POST_BEGIN,
});

export const fetchPostSuccess = () => ({
  type: DELETE_POST_SUCCESS,
});

export const fetchPostFailure = (error) => ({
  type: DELETE_POST_FAILURE,
  payload: error,
});
