import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import {
  LandingPage,
  Properties,
  Login,
  PostRegister,
  Settings,
  PropertyDetails,
  Guests,
  GuestDetail,
} from './pages/index';
import { Sidebar } from './components/index';
import './App.css';
import Billing from './pages/Billing/Billing';

const App = (props: any) => {
  return (
    <div className='App'>
      <Sidebar />
      <Switch>
        <Route exact path='/test' component={Billing} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/Login' component={Login} />
        <Route exact path='/postreg' component={PostRegister} />
        <Route exact path='/properties' component={Properties} />
        <Route exact path='/properties/:id' component={PropertyDetails} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/updateinfo' component={PostRegister} />
        <Route exact path='/guests' component={Guests} />
        <Route exact path='/guests/:id' component={GuestDetail} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
