import axios from "axios";
import { getCurrentWorks, showError, showAlert } from "./WorksSlice";
import {
  setComparisonWorks,
  setShowComparisonAlert,
} from "./ComparisonWorkSlice";
import API_URL from "./api";

export const searchWorks = async (dispatch, date) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/searchWorks/${date}`);
    dispatch(getCurrentWorks(data));

    console.log(data)
  } catch (error) {
    console.log(error);
    const { data } = error.response;
    dispatch(showAlert(data));
  }
};

export const createWorks = async (dispatch, createContent) => {
  try {
    const response = await axios.post(`${API_URL}/api/addworks`, createContent);

    dispatch(getCurrentWorks());
  } catch (error) {
    const { data } = error.response;
    dispatch(showError(data));
  }
};

export const comparisonWorks = async (dispatch, name) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/comparisonWorks/${name}`);
    dispatch(setComparisonWorks(data));
  } catch (error) {
    const { data } = error.response;
    dispatch(setShowComparisonAlert(data));
  }
};
