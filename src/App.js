import { Switch } from "react-router-dom";
import Login from "./containers/Login";
import MainContainer from "./containers/MainContainer";
import ErrorContainer from "./containers/ErrorContainer";
import AuthRoute from "./routes/AuthRoute";
import PATHS from "./routes/paths";
import GlobalStyles from "./components/Global/GlobalStyles";
import { useAuth0 } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

function App() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <GlobalStyles />
      <Switch>
        <Route path={PATHS.login} component={Login} />
        {!isLoading && (
          <AuthRoute
            isAuthenticated={isAuthenticated}
            exact
            onLogOut={logout}
            path={PATHS.base}
            component={MainContainer}
          ></AuthRoute>
        )}
        <Route component={ErrorContainer} />
      </Switch>
    </div>
  );
}

export default App;
