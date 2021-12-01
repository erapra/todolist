import React from "react";
import LogOut from "../components/logout";
import NewList from "../components/newList";
import ShowList from "../components/showList";
export default function UserPage(props) {
  return (
    <React.Fragment>
      <LogOut {...props} />
      <NewList />
      <ShowList />
    </React.Fragment>
  );
}
