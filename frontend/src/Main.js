import React, { Component } from 'react';
import {Switch, Route} from 'react-router'
import Place from './Place'
import AddPlace from './AddPlace'
import PlaceInfo from './PlaceInfo'

class Main extends Component {
  render() {
    return (
      <div>
        <main>
        <Switch>
            <Route exact path="/" component={Place}></Route>
            <Route exact path="/create" component={AddPlace}></Route>
            <Route exact path="/get/:location" component={PlaceInfo}></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Main;
