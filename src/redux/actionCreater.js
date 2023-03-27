import { HANDLE_SUBMIT } from "./actionTypes";
import { HANDLE_DELETE } from "./actionTypes";

export const handle_submit = (details) => {
  return {
    type: HANDLE_SUBMIT,
    payload: details,
  };
};
export const handle_delete= (details) => {
  console.log(details);
  return {
    type: HANDLE_DELETE,
    payload: details,
  };
};
