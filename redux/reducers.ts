// reducers.ts
// reducers.ts
import { SET_SELECTED_ITEM } from './actions';
// reducers.ts
import { SET_ANOTHER_VARIABLE } from './actions';

const initialState = {
  selectedItem: '',
  anotherVariable: '', // Nueva variable global
  // ... otros estados ...
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case SET_ANOTHER_VARIABLE:
      return { ...state, anotherVariable: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

