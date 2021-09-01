import {
  CREATEPOST_BEGIN,
  CREATEPOST_SUCCESS,
  CREATEPOST_FAILURE,
} from "../actions/constants/action-types";

const INITIAL_POST_STATE = {
  isPostLoading: false,
  isPostCreating: false,
  createPostDetails: {},
  postDetails: {},
  allPosts: [],
  error: "",
};

const PostReducer = (state = INITIAL_POST_STATE, action) => {
  switch (action.type) {
    case CREATEPOST_BEGIN:
      return {
        ...state,
        isPostCreating: true,
        createPostDetails: action.payload,
      };
    case CREATEPOST_SUCCESS:
      return { ...state, isPostCreating: false };
    case CREATEPOST_FAILURE:
      return { ...state, isPostCreating: false, error: action.payload };

    default:
      return state;
  }
};

export default PostReducer;
