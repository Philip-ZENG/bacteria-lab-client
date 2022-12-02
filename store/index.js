import { legacy_createStore as createStore} from 'redux'

const selectedColonyReducer = (state = {selectedColonyID: 0}, action) => {
  if(action.type == "changeSelectedColony") {
    // console.log(state.selectedColonyID);
    return {
      selectedColonyID: action.newSelectedColonyID
    }
  }
  return state;
}

const store = createStore(selectedColonyReducer);

export default store;