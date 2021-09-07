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
import {
  createStory,
  getAllStories,
  getStory,
  deleteStory,
} from "../helper/apicalls";
import { isAutheticated } from "../auth/auth";

//story create
export const storyCreate = (story) => {
  return (dispatch) => {
    dispatch(storyCreateBegin());
    const { user, token } = isAutheticated();
    createStory(user._id, token, story)
      .then((data) => {
        if (data.error) {
          dispatch(storyCreateFailure(data.error));
        }
        // console.log(data);
        dispatch(storyCreateSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(storyCreateFailure(errMsg));
      });
  };
};

export const storyCreateBegin = () => ({
  type: CREATESTORY_BEGIN,
});

export const storyCreateSuccess = (story) => ({
  type: CREATESTORY_SUCCESS,
  payload: story,
});

export const storyCreateFailure = (error) => ({
  type: CREATESTORY_FAILURE,
  payload: error,
});

//fetch all stories
export const fetchAllStory = () => {
  return (dispatch) => {
    dispatch(fetchAllStoryBegin());
    const { user, token } = isAutheticated();
    getAllStories(user._id, token)
      .then((data) => {
        if (data.error) {
          dispatch(fetchAllStoryFailure(data.error));
        }

        dispatch(fetchAllStorySuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchAllStoryFailure(errMsg));
      });
  };
};

export const fetchAllStoryBegin = () => ({
  type: FETCH_ALL_STORY_BEGIN,
});

export const fetchAllStorySuccess = (allstories) => ({
  type: FETCH_ALL_STORY_SUCCESS,
  payload: allstories,
});

export const fetchAllStoryFailure = (error) => ({
  type: FETCH_ALL_STORY_FAILURE,
  payload: error,
});

//fetch story
export const fetchStory = (storyId) => {
  return (dispatch) => {
    dispatch(fetchStoryBegin());
    getStory(storyId)
      .then((data) => {
        if (data.error) {
          dispatch(fetchStoryFailure(data.error));
        }
        // console.log(data);
        dispatch(fetchStorySuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchStoryFailure(errMsg));
      });
  };
};

export const fetchStoryBegin = () => ({
  type: FETCH_STORY_BEGIN,
});

export const fetchStorySuccess = (story) => ({
  type: FETCH_STORY_SUCCESS,
  payload: story,
});

export const fetchStoryFailure = (error) => ({
  type: FETCH_STORY_FAILURE,
  payload: error,
});

//delete story
export const storyDelete = (storyId) => {
  return (dispatch) => {
    dispatch(storyDeleteBegin());
    const { user, token } = isAutheticated();
    deleteStory(storyId, user._id, token)
      .then((data) => {
        if (data.error) {
          dispatch(storyDeleteFailure(data.error));
        }
        dispatch(storyDeleteSuccess());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(storyDeleteFailure(errMsg));
      });
  };
};

export const storyDeleteBegin = () => ({
  type: DELETESTORY_BEGIN,
});

export const storyDeleteSuccess = () => ({
  type: DELETESTORY_SUCCESS,
});

export const storyDeleteFailure = (error) => ({
  type: DELETESTORY_FAILURE,
  payload: error,
});

export const setCreateStoryDetails = (story) => ({
  type: SET_CREATESTORY_DETAILS,
  payload: story,
});

export const clearCreateStoryDetails = () => ({
  type: CLEAR_CREATESTORY_DETAILS,
});

export const clearCreatedStoryDetails = () => ({
  type: CLEAR_CREATEDSTORY_DETAILS,
});
