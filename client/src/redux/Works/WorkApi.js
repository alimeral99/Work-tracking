import axios from "axios";
import { getCurrentWorks, showError, showAlert } from "./WorksSlice";
import { setComparisonWorks } from "./ComparisonWorkSlice";
import API_URL from "./api";

export const searchWorks = async (dispatch, date) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/searchWorks/${date}`);
    dispatch(getCurrentWorks(data));

    console.log(data);
  } catch (error) {
    console.log(error);
    const { data } = error.response;
    dispatch(showAlert(data));
  }
};

export const getWorks = async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/works`);

    dispatch(getCurrentWorks(data));
  } catch (error) {
    console.error(error);
  }
};

export const createWorks = async (dispatch, createContent) => {
  try {
    const response = await axios.post(`${API_URL}/api/addworks`, createContent);

    console.log(response);
    dispatch(getCurrentWorks());
  } catch (error) {
    const { data } = error.response;
    dispatch(showError(data));
  }
};

export const comparisonWorks = async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/comparisonWorks`);
    dispatch(setComparisonWorks(data));
  } catch (error) {
    console.error(error);
  }
};
