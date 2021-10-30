import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { ArticlesReducer } from "./articles/reducer";

interface IChat {
  name: string;
  id: string;
  users: [[key: string]];
}

interface IMessage {
  author: string;
  text: string;
  id: string;
}

export interface IState {
  profile: {
    showName: boolean;
    name: string;
    id: string;
  };

  messages: {
    [key: string]: IMessage[];
  };

  chats: {
    chats: IChat[];
  };

  articles: {
    list: any[];

    request: {
      error: string;
      status: string;
    };
  };
}

const middlewares = [thunk];

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  articles: ArticlesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
