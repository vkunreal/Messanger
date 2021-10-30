import { IState } from "../index";

export const selectChats = (state: IState) => state.chats.chats;
