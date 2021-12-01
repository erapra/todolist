const listMiddleWare = (store) => (next) => (action) => {
  if (action.type === "CREATE_LIST") {
    if (
      localStorage.getItem("list") &&
      JSON.stringify(localStorage.getItem("list"))
    ) {
      const newList = JSON.parse(localStorage.getItem("list"));
      newList.push(action.payload);
      localStorage.setItem("list", JSON.stringify(newList));
    } else {
      const newList = [action.payload];
      localStorage.setItem("list", JSON.stringify(newList));
    }

    next({ type: "ADD_liST", payload: action.payload });
  } else if (action.type === "DELETE_lIST") {
    const newState = [...JSON.parse(localStorage.getItem("list"))];
    const filteredList = newState.filter((list) => list !== action.payload);
    localStorage.setItem("list", JSON.stringify(filteredList));

    next({ type: "REMOVE_liST", payload: action.payload });
  } else next(action);
};

export default listMiddleWare;
