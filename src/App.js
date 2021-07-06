
import './App.css';
import Form from './components/Form'
import Result from './components/Result';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [selectedData, setSelectedData] = useState('');
 
  return (
    <div className="App">

        <Router>
          <Switch>
            <Route exact path={["/","/form"]} ><Form setSelectedData={setSelectedData}></Form></Route>
            <Route exact path="/result" ><Result selectedData={selectedData}></Result></Route> 
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
