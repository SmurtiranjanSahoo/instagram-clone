import {
  CREATEPOST_BEGIN,
  CREATEPOST_SUCCESS,
  CREATEPOST_FAILURE,
  FETCH_ALLPOST_BEGIN,
  FETCH_ALLPOST_SUCCESS,
  FETCH_ALLPOST_FAILURE,
} from "../actions/constants/action-types";

const INITIAL_POST_STATE = {
  isPostLoading: false,
  isPostCreating: false,
  isGettingAllPost: false,
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

    case FETCH_ALLPOST_BEGIN:
      return { ...state, isGettingAllPost: true };
    case FETCH_ALLPOST_SUCCESS:
      return { ...state, isGettingAllPost: false, allPosts: action.payload };
    case FETCH_ALLPOST_FAILURE:
      return { ...state, isGettingAllPost: false, error: action.payload };

    default:
      return state;
  }
};

export default PostReducer;
