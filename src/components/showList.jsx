import { Button } from "bootstrap";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function ShowList() {
  const list = useSelector((state) => state.list);
  const removeList = useDispatch();
  const deleteList = (item) => {
    removeList({ type: "DELETE_lIST", payload: item });
  };

  return (
    <React.Fragment>
      <table className="table" style={{ background: "white" }}>
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">To Do List</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {list && list.length > 0 ? (
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteList(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td> </td>
              <td> TO DO List is Empty</td>
              <td> </td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}
