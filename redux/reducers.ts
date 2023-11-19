// reducers.ts
// reducers.ts
import { SET_SELECTED_ITEM } from './actions';
import { SET_CODE_VARIABLE } from './actions';

const initialState = {
  globalVariable: '',
  selectedItem: '', // Agrega la propiedad para el elemento seleccionado
  codeVariable: '', // Nueva variable global
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case SET_CODE_VARIABLE:
      return { ...state, anotherVariable: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
