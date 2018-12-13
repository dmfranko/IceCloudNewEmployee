import React, { Component } from 'react';
import './App.css';

import LexChat from "react-lex";

import Amplify from "aws-amplify";
import aws_exports from './aws-exports';
import { ChatBot, AmplifyTheme, withAuthenticator } from 'aws-amplify-react';

import NavBar from './components/NavBar'
import KnowledgeList from './components/KnowledgeList'

Amplify.configure(aws_exports);

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
  render() {
    return (
      <div className="App">
        <NavBar />
        <KnowledgeList />

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



// Not showing the signed in header here.
export default withAuthenticator(App, true)
