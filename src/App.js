import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import UserList from "./pages/listPage";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <PrivateRoute path="/new" component={UserList} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
