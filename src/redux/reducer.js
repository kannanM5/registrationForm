import { HANDLE_SUBMIT, HANDLE_DELETE } from "./actionTypes";

const initialState = {
  data: [
    { name: "kannan", age: 23, gender: "male ", course: "React" },
    { name: "pradeep", age: 25, gender: "male ", course: "Css" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
      let word = [...state.data, action.payload];
      return { ...state, data: word };

    case HANDLE_DELETE:
      state.data.splice(action.payload, 1);
      let remainingData = [...state.data];
      return {
        ...state,
        data: remainingData,
      };
    default:
      return state;
  }
};

export default reducer;
