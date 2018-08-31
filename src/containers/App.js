import { h } from 'hyperapp';
import { Route, Switch } from "@hyperapp/router"
import Home from './Home';
import Test from './Test';
import Upload from './Upload';
import Persist from './Persist';
import Error from './Error';

export default (state, actions) => { return (
  <div>
    <Switch>
      <Route path="/" render={Home} />
      <Route path="/test" render={()=>Test(state,actions)} /> 
      <Route path="/upload" render={()=>Upload(state,actions)} />
      <Route path="/persist" render={()=>Persist(state,actions)} />
      <Route render={Error} />
    </Switch>
  </div>
)}