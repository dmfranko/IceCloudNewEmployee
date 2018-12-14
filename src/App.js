import React, { Component } from 'react';
import './App.css';

import LexChat from "react-lex";

import Amplify from "aws-amplify";
import aws_exports from './aws-exports';
import { AmplifyTheme, withAuthenticator } from 'aws-amplify-react';

import NavBar from './components/NavBar'
import KnowledgeList from './components/KnowledgeList'
import CheckList from './components/CheckList'
import Welcome from './components/Welcome'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircle from '@material-ui/icons/CheckCircle';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Typography from '@material-ui/core/Typography';




Amplify.configure(aws_exports);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <NavBar />
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollButtons="off"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Welcome" icon={<InsertEmoticon />} />
            <Tab label="Onboarding Checklist" icon={<CheckCircle />} />
            <Tab label="Quick Hints" icon={<InfoIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Welcome/></TabContainer>}
        {value === 1 && <TabContainer><CheckList /></TabContainer>}
        {value === 2 && <TabContainer><KnowledgeList /></TabContainer>}

        <LexChat botName="MrIceCloud"
          IdentityPoolId="us-east-1:7fbe5654-1ff7-4152-a2ea-699d8ab5846c"
          placeholder="Placeholder text"
          style={{ position: 'absolute' }}
          backgroundColor="#FFFFFF"
          height="300px"
          headerText="Chat with Mr. IceCloud" />
      </div>
    );
  }
}

export default withAuthenticator(App, true)
