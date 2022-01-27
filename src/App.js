import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import GenerateForm from './components/GenerateForm/GenerateForm';
import FormLists from './components/FormLists/FormLists';
import Home from './components/Home/Home';
import FormDetail from './components/FormDetail/FormDetail';
import ShowDetail from './components/ShowDetail/ShowDetail';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/generateForm">
          <GenerateForm></GenerateForm>
        </Route>
        <Route path="/formDetail/:id">
          <FormDetail></FormDetail>
        </Route>
        <Route path="/showDetail">
          <ShowDetail></ShowDetail>
        </Route>
       
      </Switch>
    </Router>
   
  );
}

export default App;
