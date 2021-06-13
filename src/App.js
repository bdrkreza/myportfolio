import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./Components/Header/NavBar/NavBar";
import NoMatch from "./Components/NoMatch/NoMatch";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact/Contact";
import ContactForm from "./Components/Pages/Contact/ContactForm/ContactForm";
import Home from "./Components/Pages/Home/Home";
import Project from "./Components/Pages/Project/Project/Project";
import MyResume from "./Components/Pages/Resume/MyResume/MyResume";
import Resume from "./Components/Pages/Resume/Resume/Resume";
import Services from "./Components/Services/Services/Services";




function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/service" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>

    </>
  );
}

export default App;