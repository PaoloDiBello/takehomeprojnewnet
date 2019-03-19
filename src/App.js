import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar'
import ListUser from './ListUser'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import SignUp from './SignUp'
import Nothing from './Nothing.jsx'


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
    window.$ = "HI"
    return (
      <React.Fragment>
        <ListUser input={this.state.input} />
        <SearchBar passList={this.handleList} />
        <Link to="/signup" style={{ display: "flex", justifyContent: "center" }} >SignUp</Link>
        {window.$}
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
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={WrapUp} />
            <Route exact path="/success" component={SearchBar} />
            <Route exact path="/signup/:id" component={SignUp} />
            <Route path="/signup/:id/password/:password" component={SignUp} />
            { /* Used when route redirect to */}

            <Route exact path="/hi">
              <Redirect to="/signup" />
            </Route>
            <Route component={Nothing} status={404} />
          </Switch>
        </div >

      </Router>
    );
  }

}


export default App;


