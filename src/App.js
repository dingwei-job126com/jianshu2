import React, { Component,Fragment } from 'react';
import store from './store';
import { Globalstyle } from './style.js';
import {GlobalstyleFont} from './statics/iconfont/iconfont.js';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header';
import Login from './login';
import Home from './pages/home';
import Detail from './pages/detail';
import BackTop from './common/backtop';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Fragment>
          <Globalstyle />
          <GlobalstyleFont />          
          <BrowserRouter>
            <div>
             <Header />
             <BackTop />
              <Route path ='/' exact component={Home}></Route>
              <Route path='/login' exact component = {Login}></Route>
              <Route path='/detail/:id' exact component = {Detail}></Route>             
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
