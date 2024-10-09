import API_URL from "../Works/api";
import { registerFailure, registerSuccess, setRedirect } from "./UserSlice";
import axios from "axios";

export const register = async (dispatch, username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
    });

    dispatch(setRedirect());
  } catch ({ response }) {
    const { data } = response;
    dispatch(registerFailure(data));
  }
};

export const login = async (dispatch, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    const { user } = response.data;

    dispatch(registerSuccess(user));
  } catch ({ response }) {
    const { data } = response;
    console.log(data);
    dispatch(registerFailure(data));
  }
};
