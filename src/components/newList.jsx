import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
export default function NewList() {
  const newList = useRef();
  const addList = useDispatch();

  const createList = (event) => {
    event.preventDefault();

    addList({ type: "CREATE_LIST", payload: newList.current.value });
  };

  return (
    <React.Fragment>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="inputList"
            placeholder="New List"
            ref={newList}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={createList}
        >
          Confirm List
        </button>
      </form>
    </React.Fragment>
  );
}
