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
import {
  isAutheticated,
  getUser,
  getAllUsers,
  getUserByUsername,
  updateUser,
} from "../auth/auth";

//fetch user
export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchUserBegin());
    const { token } = isAutheticated();
    getUser(token, userId)
      .then((data) => {
        if (data.error) {
          dispatch(fetchUserFailure(data.error));
        }
        dispatch(fetchUserSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUserFailure(errMsg));
      });
  };
};

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

//fetch all user
export const fetchAllUser = () => {
  return (dispatch) => {
    dispatch(fetchAllUserBegin());
    const { token, user } = isAutheticated();
    getAllUsers(token, user._id)
      .then((data) => {
        if (data.error) {
          dispatch(fetchAllUserFailure(data.error));
        }
        dispatch(fetchAllUserSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchAllUserFailure(errMsg));
      });
  };
};

export const fetchAllUserBegin = () => ({
  type: FETCH_ALLUSER_BEGIN,
});

export const fetchAllUserSuccess = (alluser) => ({
  type: FETCH_ALLUSER_SUCCESS,
  payload: alluser,
});

export const fetchAllUserFailure = (error) => ({
  type: FETCH_ALLUSER_FAILURE,
  payload: error,
});

//fetch user by username
export const fetchUserByUsername = (username) => {
  return (dispatch) => {
    dispatch(fetchUserByUsernameBegin());
    const { token, user } = isAutheticated();
    getUser(token, user._id, username)
      .then((data) => {
        if (data.error) {
          dispatch(fetchUserByUsernameFailure(data.error));
        }
        dispatch(fetchUserByUsernameSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUserByUsernameFailure(errMsg));
      });
  };
};

export const fetchUserByUsernameBegin = () => ({
  type: FETCH_USERBYUSERNAME_BEGIN,
});

export const fetchUserByUsernameSuccess = (user) => ({
  type: FETCH_USERBYUSERNAME_SUCCESS,
  payload: user,
});

export const fetchUserByUsernameFailure = (error) => ({
  type: FETCH_USERBYUSERNAME_FAILURE,
  payload: error,
});

//update user
export const updateUser = (userformData) => {
  return (dispatch) => {
    dispatch(updateUserBegin());
    const { token, user } = isAutheticated();
    getUser(user._id, token, userformData)
      .then((data) => {
        if (data.error) {
          dispatch(updateUserFailure(data.error));
        }
        dispatch(updateUserSuccess());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(updateUserFailure(errMsg));
      });
  };
};

export const updateUserBegin = () => ({
  type: UPDATEUSER_BEGIN,
});

export const updateUserSuccess = () => ({
  type: UPDATEUSER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: UPDATEUSER_FAILURE,
  payload: error,
});
