import {
  CREATEPOST_BEGIN,
  CREATEPOST_SUCCESS,
  CREATEPOST_FAILURE,
} from "../actions/constants/action-types";
import { createPost } from "../helper/apicalls";
import { isAutheticated } from "../auth/auth";

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
