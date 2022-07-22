import './css/App.css';
import Navbar from './partials/Navbar';
import Home from './partials/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './partials/Create';
import BlogDetails from './partials/BlogDetails';
import NotFound from './partials/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route patch="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;