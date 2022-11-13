import axios from "axios";
import { HOST } from "./App";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    console.log("123");
    const res = await axios.post(HOST + "/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const testFunc = async () => {
  try {
    console.log("HOST", HOST);
    const res = await axios.get(HOST + "/auth");
  } catch (err) {}
};
