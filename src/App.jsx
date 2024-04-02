import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import LoginPage from "../src/components/SignIn.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout";
import SignUpPage from './components/SignUp.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  console.log(token);
  return (
    <Suspense fallback={<NotFound />}>
      <ToastContainer/>
      <Router>
        <Switch>
        <Route exact path="/signup" render={() =><SignUpPage setToken={setToken}/>} />
          {token ? (
            <Route exact path="/" component={Layout} />
          ) : (
            <Route
              exact
              path="/"
              render={() => <LoginPage setToken={setToken} />}
            />
          )}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
