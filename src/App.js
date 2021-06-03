import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./containers/Login";
import MainContainer from "./containers/MainContainer";
import ErrorContainer from "./containers/ErrorContainer";
import AuthRoute from "./routes/AuthRoute";
import PublicRoute from "./routes/PublicRoute";
import PATHS from "./routes/paths";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute path={PATHS.login} component={Login} />
          <AuthRoute
            exact
            path={PATHS.base}
            component={MainContainer}
          ></AuthRoute>
          <PublicRoute component={ErrorContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
