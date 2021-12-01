import React from "react";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
export default function NewList() {
  const newList = useRef();
  const addList = useDispatch();
  const [msg, setMsg] = useState("");

  const createList = (event) => {
    event.preventDefault();

    if (newList.current.value === "") {
      setMsg("List is Mandatory");
    } else {
      setMsg("");
      addList({ type: "CREATE_LIST", payload: newList.current.value });
    }
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

          {msg ? <small class="form-text text-muted">{msg}</small> : ""}
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
