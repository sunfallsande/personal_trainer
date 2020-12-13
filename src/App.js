import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import Customers from './components/Customers';
import Trainings from './components/Trainings';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <MyNav />
        <Switch>
          <Route exact path="/" component={Customers}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/trainings" component={Trainings}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
