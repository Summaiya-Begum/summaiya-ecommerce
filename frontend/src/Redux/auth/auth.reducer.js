import * as types from "./auth.actionType";
let token = JSON.parse(localStorage.getItem("token")) || null;
const initState = {
  isAuth: token ? true : false,
  isLoading: false,
  isError: false,
  user: {firstname:"S",lastname:"B"},
  token: token || null,
  msg: "",
};

export const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: payload,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload.token));
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        msg: payload.msg,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: null,
        isError: true,
      };
    case types.GET_USER:
      return { ...state, user: payload };
    case types.LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        msg: payload,
      };
    default:
      return state;
  }
};
