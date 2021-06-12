import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//REDUX
import { Provider } from "react-redux";
import store from "./redux/store";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth";

// views without layouts

//import Landing from "views/Landing.js";
import Profile from "./views/Profile";
import Index from "./views/Index.js";

import PrivateRoute from "routing/privateRoutes";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* add routes with layouts */}
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          {/* add routes without layouts */}
          {/* <Route path="/landing" exact component={Landing} /> */}
          <PrivateRoute path="/profile" exact component={Profile} />
          <Route path="/" exact component={Index} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
