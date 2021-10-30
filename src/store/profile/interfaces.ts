export interface IAction {
  type: string;
  payload: {
    name?: string;
    id?: string;
  };
}
