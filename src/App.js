import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./containers/Login";
import MainContainer from "./containers/MainContainer";
import ErrorContainer from "./containers/ErrorContainer";
import AuthRoute from "./routes/AuthRoute";
import PublicRoute from "./routes/PublicRoute";
import PATHS from "./routes/paths";
import GlobalStyles from "./components/GlobalStyles";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <GlobalStyles />
      <Switch>
        <PublicRoute path={PATHS.login} component={Login} />
        {!isLoading && (
          <AuthRoute
            isAuthenticated={isAuthenticated}
            exact
            onLogOut={logout}
            path={PATHS.base}
            component={MainContainer}
          ></AuthRoute>
        )}
        <PublicRoute component={ErrorContainer} />
      </Switch>
    </div>
  );
}

export default App;
