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
  UPDATE_LIKECOMMENT_POST_BEGIN,
  UPDATE_LIKECOMMENT_POST_SUCCESS,
  UPDATE_LIKECOMMENT_POST_FAILURE,
  FETCH_TOTALPOST_COUNT,
} from "../actions/constants/action-types";

const INITIAL_POST_STATE = {
  isPostLoading: false,
  isPostCreating: false,
  isGettingAllPost: false,
  isPostDeleting: false,
  isPostUpdating: false,
  postDetails: {},
  allPosts: [],
  totalPost: "",
  error: "",
};

const PostReducer = (state = INITIAL_POST_STATE, action) => {
  switch (action.type) {
    case CREATEPOST_BEGIN:
      return { ...state, isPostCreating: true };
    case CREATEPOST_SUCCESS:
      return { ...state, isPostCreating: false };
    case CREATEPOST_FAILURE:
      return { ...state, isPostCreating: false, error: action.payload };

    case FETCH_ALLPOST_BEGIN:
      return { ...state, isGettingAllPost: true };
    case FETCH_ALLPOST_SUCCESS:
      return {
        ...state,
        isGettingAllPost: false,
        allPosts: [...state.allPosts, ...action.payload],
      };
    case FETCH_ALLPOST_FAILURE:
      return { ...state, isGettingAllPost: false, error: action.payload };
    case FETCH_TOTALPOST_COUNT:
      return { ...state, totalPost: action.payload };

    case FETCH_POST_BEGIN:
      return { ...state, isPostLoading: true, postDetails: {} };
    case FETCH_POST_SUCCESS:
      return { ...state, isPostLoading: false, postDetails: action.payload };
    case FETCH_POST_FAILURE:
      return { ...state, isPostLoading: false, error: action.payload };

    case DELETE_POST_BEGIN:
      return { ...state, isPostDeleting: true };
    case DELETE_POST_SUCCESS:
      return { ...state, isPostDeleting: false };
    case DELETE_POST_FAILURE:
      return { ...state, isPostDeleting: false, error: action.payload };

    case UPDATE_LIKECOMMENT_POST_BEGIN:
      return { ...state, isPostUpdating: true };
    case UPDATE_LIKECOMMENT_POST_SUCCESS:
      return { ...state, isPostUpdating: false };
    case UPDATE_LIKECOMMENT_POST_FAILURE:
      return { ...state, isPostUpdating: false, error: action.payload };

    default:
      return state;
  }
};

export default PostReducer;
