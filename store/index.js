import { legacy_createStore as createStore} from 'redux'

const selectedColonyReducer = (state = {selectedColonyID: 0}, action) => {
  if(action.type == "changeSelectedColony") {
    console.log(state.selectedColonyID);
    console.log(action.newSelectedColonyID);
    return {
      selectedColonyID: action.newSelectedColonyID
    }
  }
  return state;
}

const store = createStore(selectedColonyReducer);

export default store;