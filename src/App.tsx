import * as React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import CakesListContainer from './cake/CakesListContainer';
import CakeDetailsContainer from './cake/CakeDetailsContainer';
import SaveCakeContainer from './cake/SaveCakeContainer';
import EditCakeContainer from './cake/EditCakeContainer';

export interface ActiveLinkProps {
  label: string;
  to: string;
  activeOnlyWhenExact: boolean;
}

const ActiveLink = ({ label, to, activeOnlyWhenExact }: ActiveLinkProps) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={() => (
        <Link to={to}>{label}</Link>
      )}
    />
  );
}

const App = () => {
  return (
    <div>
      <div>
        <ActiveLink activeOnlyWhenExact={true} to="/cakes" label="Cakes" />
        <ActiveLink activeOnlyWhenExact={true} to="/cakes/save" label="Add Cake" />
      </div>

      <Switch>
        <Route exact={true} path="/cakes" component={CakesListContainer} />
        <Route exact={true} path="/cakes/save" component={SaveCakeContainer} />
        <Route exact={true} path="/cakes/edit/:id" component={EditCakeContainer} />
        <Route exact={true} path="/cakes/:id" component={CakeDetailsContainer} />
        <Redirect from="/" to="cakes" /> 
      </Switch>
    </div>
  );
};

export default App;
