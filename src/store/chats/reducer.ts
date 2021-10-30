import { IAction } from "./interfaces";
import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./actions";

const initialState = {
  chats: [],
};

export const chatsReducer = (
  state = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        chats: [
          ...state.chats,
          {
            id: `chats-${Date.now()}`,
            name: payload,
          },
        ],
      };
    }

    case DELETE_CHAT: {
      const newChats = state.chats.filter(({ id }) => id !== payload);

      return {
        ...state,
        chats: newChats,
      };
    }

    case SET_CHATS: {
      return {
        ...state,
        chats: payload,
      };
    }

    default:
      return state;
  }
};
