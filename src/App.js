import './App.css';
import Header from './header';
import Login from './login/login'
import Register from './register/register'
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Movies from './movies';
import MoviesDet from './moviesDet';
import Fav from './fav';
import { CounterProvider } from './context/CounterContext';
import Counter from './pages/Counter';
import React, { useEffect, useState }  from 'react'




function App() {
const [lang, setLang] = useState("en");

  return (
    <div className="App">
      <Router>
        <CounterProvider value={{lang,setLang}}>
        <Header />
        <Switch>
        <Route path='/' exact component={Movies}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/fav' exact component={Fav}/>
        <Route path='/moviesDet/:id' exact component={MoviesDet}/>
        <Route path='/counter' exact component={Counter}/>
        </Switch>
        </CounterProvider>
      </Router>
    </div>
  );
}

export default App;
