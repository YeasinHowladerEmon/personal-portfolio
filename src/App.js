import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/Home/About/About';
 import Projects from './Components/Home/Projects/Projects.js';
 import Blogs from './Components/Home/Blogs/Blogs.js';
import Contact from './Components/Home/Contact/Contact';
import ProjectDetails from './Components/Home/ProjectDetails/ProjectDetails';
function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>   
        <Route>
          <ProjectDetails path='/work'/>
        </Route>   
      </Switch>
    </Router>
  );
}

export default App;
