import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, pink500 } from 'material-ui/styles/colors';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

import NavBar from './components/navbar';

import Welcome from './components/welcome';
import About from './components/about';
import SignInPage from './views/signin-page';

import './App.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: { primary1Color: pink500, accent1Color: blue500 }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpened: false
    };
  }

  _toogleDrawer() {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }

  handleTitleClick() {
    alert('you clicked on Title');
  }
  onRightIconButtonClick() {
    alert('hi');
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <NavBar
              title="My ReactJS App"
              onTitleClick={() => this.handleTitleClick()}
              onLeftIconButtonClick={() => this._toogleDrawer()}
              onRightIconButtonClick={() => this.onRightIconButtonClick()}
            />
            <Drawer width={200} open={this.state.drawerOpened}>
              <Menu onItemTouchTap={() => this._toogleDrawer()}>
                <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
                <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                <Divider />
                <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                <MenuItem primaryText="Download" leftIcon={<Download />} />
                <Divider />
                <MenuItem primaryText="Remove" leftIcon={<Delete />} />
              </Menu>
            </Drawer>
            {/* <Redirect exact={true} from="/" to="/signin" /> */}
            <Route path="/" exact={true} component={SignInPage} />
            <Route path="/about" component={About} />
            {/* <Route path="/signin" component={SignIn} /> */}
            <Route path="/signin" component={SignInPage} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
