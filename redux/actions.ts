export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
// actions.ts
export const SET_ANOTHER_VARIABLE = 'SET_ANOTHER_VARIABLE';

export const setAnotherVariable = (value) => ({
  type: SET_ANOTHER_VARIABLE,
  payload: value,
});


export const setSelectedItem = (item) => ({
  type: SET_SELECTED_ITEM,
  payload: item,
});

