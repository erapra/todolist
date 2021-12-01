const initalState = [];

export default function listReducer(state = initalState, action) {
  switch (action.type) {
    case "ADD_liST": {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case "REMOVE_liST": {
      const newState = [...state];
      const filteredList = newState.filter((list) => list !== action.payload);
      return filteredList;
    }
    default:
      return state;
  }
}
