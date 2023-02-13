import axios from "axios";
import {
  SUPPORTER_CREATE_REQUEST,
  SUPPORTER_CREATE_SUCCESS,
  SUPPORTER_CREATE_FAIL,
  SUPPORTER_LIST_REQUEST,
  SUPPORTER_LIST_SUCCESS,
  SUPPORTER_LIST_FAIL,
} from "../constants/supporterConstants";

export const createSupporter = (supportData) => async (dispatch, getStatus) => {
  try {
    dispatch({
      type: SUPPORTER_CREATE_REQUEST,
    });

    const { data } = await axios.post(
      "http://localhost:5000/api/supporters/",
      supportData
    );

    dispatch({
      type: SUPPORTER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPPORTER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const supporterListAction = () => async (dispatch, getStatus) => {
  try {
    dispatch({
      type: SUPPORTER_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/listsup`);

    dispatch({
      type: SUPPORTER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPPORTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
