import { IState } from "./../index";

export const selectMessages = (state: IState) => state.messages.messages;

export const selectAuthor = (chatId: string) => (state: IState) => {
  const messages = state.messages;
  return messages[chatId][messages[chatId].length - 1].author;
};
