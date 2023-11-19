export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const SET_CODE_VARIABLE = 'SET_CODE_VARIABLE';


export const setSelectedItem = (item) => ({
  type: SET_SELECTED_ITEM,
  payload: item,
});

export const setCodeVariable = (value) => ({
  type: SET_CODE_VARIABLE,
  payload: value,
});