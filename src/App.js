import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar'
import ListPhotos from './ListPhotos'
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Nothing from './Nothing.jsx'
import Page2 from './Page2'


//const MyContext = React.createContext();

/**************************************************/
class WrapUp extends Component {
  state = {
    input: '',
  }

  handleList = (data) => {
    this.setState({
      input: data
    })
  }


  render() {


    return (
      <React.Fragment >

        <Paper style={{ margin: '10px 20%' }} >
          <MenuList >
            <Link to={"/Page2"} style={{ textDecoration: 'none' }}>
              <MenuItem >
                Page2{' '}
              </MenuItem>
            </Link>
            <Link to={"/dfjdndjk"}>
              <MenuItem>
                404
            </MenuItem>
            </Link>
          </MenuList>
        </Paper>
        <br />

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
        <React.Fragment>
          <Switch >
            <Route exact path="/" component={WrapUp} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/pagina2">
              <Redirect to="/page2" />
            </Route>
            <Route component={Nothing} status={404} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }

}


export default App;