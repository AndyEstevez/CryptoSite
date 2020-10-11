import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import CurrencyPage from './components/CurrencyPage/CurrencyPage';


function App() {
  return (
      <div className="App">
          <Switch>
            <Route path="/" exact component={CoinList}/>
            <Route exact path="/currencies/:id" component={CurrencyPage}/>
          </Switch>
      </div>
  );
}

export default App;
