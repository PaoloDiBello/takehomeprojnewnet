import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar'
import ListPhotos from './ListPhotos'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Nothing from './Nothing.jsx'
import Page2 from './Page2'

//const MyContext = React.createContext();

/**************************************************/
class WrapUp extends Component {
  state = {
    input: ''
  }

  handleList = (data) => {
    this.setState({
      input: data
    })
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar passList={this.handleList} />
        <ListPhotos input={this.state.input} />
      </React.Fragment >
    )
  }


}

/**************************************************/


class App extends Component {

  render() {

    return (
      <Router >
        <div >
          <Switch >
            <Route exact path="/" component={WrapUp} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/pagina2">
              <Redirect to="/page2" />
            </Route>
            <Route component={Nothing} status={404} />
          </Switch>
        </div >

      </Router>
    );
  }

}


export default App;


