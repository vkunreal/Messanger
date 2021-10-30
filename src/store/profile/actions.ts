export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const TOGGLE_SHOW_NAME = "PROFILE::TOGGLE_SHOW_NAME";
export const CHANGE_ID = "PROFILE::CHANGE_ID";

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME,
};

export const changeName = (name: string) => ({
  type: CHANGE_NAME,
  payload: { name },
});

export const changeId = (id: string) => ({
  type: CHANGE_ID,
  payload: { id },
});
