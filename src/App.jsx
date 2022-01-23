import './App.css';
import React from 'react';
import About from "./routes/About/About";
import {Route, Routes} from "react-router"; //TODO: setup linter
import {HashRouter, NavLink} from "react-router-dom";
import Home from "./routes/Home/Home";
import Profile from "./routes/Profile/Profile";

function App() {
  return (
      <HashRouter>
          <div className="app">
              <h1 className="appName">Eda v lapkah</h1>
              {/*<ul>
                  <li><NavLink to="/">Главная</NavLink></li>
                  <li><NavLink to="/recepies">Мои рецепты</NavLink></li>
                  <li><NavLink to="/profile">Профиль</NavLink></li>
              </ul>*/}
              <div className="content">
                  {/*<Routes>
                      <Route exact path="/" component={About} />
                      <Route path="/recepies" component={Home} />
                      <Route path="/profile" component={Profile} />
                  </Routes>*/}
              </div>
          </div>
      </HashRouter>
  );
}

export default App;
