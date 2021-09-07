import {
  CREATESTORY_BEGIN,
  CREATESTORY_SUCCESS,
  CREATESTORY_FAILURE,
  FETCH_ALL_STORY_BEGIN,
  FETCH_ALL_STORY_SUCCESS,
  FETCH_ALL_STORY_FAILURE,
  FETCH_STORY_BEGIN,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAILURE,
  DELETESTORY_BEGIN,
  DELETESTORY_SUCCESS,
  DELETESTORY_FAILURE,
  SET_CREATESTORY_DETAILS,
  CLEAR_CREATESTORY_DETAILS,
  CLEAR_CREATEDSTORY_DETAILS,
} from "../actions/constants/action-types";

const INITIAL_STORY_STATE = {
  isStoryLoading: false,
  isStoryCreating: false,
  isGettingAllStory: false,
  isStoryDeleting: false,
  createStoryDetails: {},
  createdStoryDetails: {},
  storyDetails: {},
  allStories: [],
  error: "",
};

const StoryReducer = (state = INITIAL_STORY_STATE, action) => {
  switch (action.type) {
    case CREATESTORY_BEGIN:
      return { ...state, isStoryCreating: true };
    case CREATESTORY_SUCCESS:
      return {
        ...state,
        isStoryCreating: false,
        createdStoryDetails: action.payload,
      };
    case CREATESTORY_FAILURE:
      return { ...state, isStoryCreating: false, error: action.payload };

    case FETCH_ALL_STORY_BEGIN:
      return { ...state, isGettingAllStory: true };
    case FETCH_ALL_STORY_SUCCESS:
      return { ...state, isGettingAllStory: false, allStories: action.payload };
    case FETCH_ALL_STORY_FAILURE:
      return { ...state, isGettingAllStory: false, error: action.payload };

    case FETCH_STORY_BEGIN:
      return { ...state, isStoryLoading: true, storyDetails: {} };
    case FETCH_STORY_SUCCESS:
      return { ...state, isStoryLoading: false, storyDetails: action.payload };
    case FETCH_STORY_FAILURE:
      return { ...state, isStoryLoading: false, error: action.payload };

    case DELETESTORY_BEGIN:
      return { ...state, isStoryDeleting: true };
    case DELETESTORY_SUCCESS:
      return { ...state, isStoryDeleting: false };
    case DELETESTORY_FAILURE:
      return { ...state, isStoryDeleting: false, error: action.payload };

    case SET_CREATESTORY_DETAILS:
      return { ...state, createStoryDetails: action.payload };
    case CLEAR_CREATESTORY_DETAILS:
      return { ...state, createStoryDetails: {} };
    case CLEAR_CREATEDSTORY_DETAILS:
      return { ...state, createdStoryDetails: {} };
    default:
      return state;
  }
};

export default StoryReducer;
