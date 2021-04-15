import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Buttons from "./pages/Buttons";
import Menu from "./pages/Menu";
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
  <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/cards' component={Cards}/>
      <Route path='/buttons' component={Buttons}/>
    </Switch>
    </div>
  );
}

export default App;
