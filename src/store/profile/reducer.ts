import { IAction } from "./interfaces";
import { CHANGE_NAME, CHANGE_ID, TOGGLE_SHOW_NAME } from "./actions";

const initialState = {
  showName: false,
  name: "Default",
  id: "0",
};

export const profileReducer = (
  state = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: payload.name,
      };
    }

    case TOGGLE_SHOW_NAME: {
      return {
        ...state,
        showName: !state.showName,
      };
    }

    case CHANGE_ID:
      return {
        ...state,
        id: payload.id,
      };

    default:
      return state;
  }
};
