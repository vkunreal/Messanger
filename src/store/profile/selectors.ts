import { IState } from "./../index";

export const selectShowName = (state: IState) => state.profile.showName;
export const selectId = (state: IState) => state.profile.id;
export const selectUserName = (state: IState) => state.profile.name;
