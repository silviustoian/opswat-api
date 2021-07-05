
import './App.css';
import Form from './components/Form'
import Result from './components/Result';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Router>
          <Switch>
            <Route exact path={["/","/form"]} component={Form}></Route>
            <Route exact path="/result" component={Result}></Route> 
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
