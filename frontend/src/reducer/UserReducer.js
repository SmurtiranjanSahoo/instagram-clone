import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_ALLUSER_BEGIN,
  FETCH_ALLUSER_SUCCESS,
  FETCH_ALLUSER_FAILURE,
  FETCH_USERBYUSERNAME_BEGIN,
  FETCH_USERBYUSERNAME_SUCCESS,
  FETCH_USERBYUSERNAME_FAILURE,
  UPDATEUSER_BEGIN,
  UPDATEUSER_SUCCESS,
  UPDATEUSER_FAILURE,
} from "../actions/constants/action-types";

const INITIAL_USER_STATE = {
  isUserLoading: false,
  isGettingAllUser: false,
  isUserUpdating: false,
  userDetails: {},
  userUsernameDetails: {},
  allUsers: [],
  error: "",
};

const UserReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return { ...state, isUserLoading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, isUserLoading: false, userDetails: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, isUserLoading: false, error: action.payload };

    case FETCH_ALLUSER_BEGIN:
      return { ...state, isGettingAllUser: true };
    case FETCH_ALLUSER_SUCCESS:
      return { ...state, isGettingAllUser: false, allUsers: action.payload };
    case FETCH_ALLUSER_FAILURE:
      return { ...state, isGettingAllUser: false, error: action.payload };

    case FETCH_USERBYUSERNAME_BEGIN:
      return { ...state, isUserLoading: true };
    case FETCH_USERBYUSERNAME_SUCCESS:
      return {
        ...state,
        isUserLoading: false,
        userUsernameDetails: action.payload,
      };
    case FETCH_USERBYUSERNAME_FAILURE:
      return { ...state, isUserLoading: false, error: action.payload };

    case UPDATEUSER_BEGIN:
      return { ...state, isGettingAllUser: true };
    case UPDATEUSER_SUCCESS:
      return { ...state, isGettingAllUser: false };
    case UPDATEUSER_FAILURE:
      return { ...state, isGettingAllUser: false, error: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
