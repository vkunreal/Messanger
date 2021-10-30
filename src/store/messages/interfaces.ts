export interface IState {
  messages: {
    [key: string]: IMessage[];
  };
}

export interface IAction {
  type: string;
  payload: {
    [key: string]: string;
  };
}

export interface IMessage {
  author: string;
  text: string;
  id: string;
}
