import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Header/NavBar/NavBar";
import NoMatch from "./Components/NoMatch/NoMatch";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Project from "./Components/Pages/Project/Project";
import Resume from "./Components/Pages/Resume/Resume/Resume";
import Services from "./Components/Services/Services/Services";
import SignIn from "./User/SignIn/SignIn";
import SignUp from "./User/SignUp/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project" component={Project} />
              <Route path="/service" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="*" component={NoMatch} />
              <Route exact path="/" component={Home} />
            </Switch>
      </Router>
    </>
  );
}

export default App;
