import axios from "axios";
import { getCurrentWorks, showError, showAlert } from "./WorksSlice";
import {
  setComparisonWorks,
  setShowComparisonAlert,
} from "./ComparisonWorkSlice";
import API_URL from "./api";

export const searchWorks = async (dispatch, date, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(token);
    const { data } = await axios.get(
      `${API_URL}/api/searchWorks/${date}`,
      config
    );
    dispatch(getCurrentWorks(data));
  } catch (error) {
    console.log(error);
    const { data } = error.response;
    dispatch(showAlert(data));
  }
};

export const createWorks = async (dispatch, createContent, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${API_URL}/api/addworks`,
      createContent,
      config
    );

    dispatch(getCurrentWorks());
  } catch (error) {
    const { data } = error.response;
    dispatch(showError(data));
  }
};

export const comparisonWorks = async (dispatch, name, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/api/comparisonWorks/${name}`,
      config
    );
    dispatch(setComparisonWorks(data));
  } catch (error) {
    const { data } = error.response;
    dispatch(setShowComparisonAlert(data));
  }
};
