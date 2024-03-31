// import { Button } from "@mui/material"
//   <Button variant="contained">Hello App</Button>
import {Routes, Route} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
          </Route>
      </Routes>
  );
}

export default App;
