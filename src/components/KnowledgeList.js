import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Amplify, { graphqlOperation } from "aws-amplify";
import { withAuthenticator, Connect } from 'aws-amplify-react';

import * as queries from '../graphql/queries';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

const ListView = ({ todos }) => (
  <div>
    <h3>Knowledge</h3>
    <List>
      <React.Fragment>
        {todos.map(todo =>
          <ListItem key={todo.id}>
            <ListItemText
              primary={todo.name}
              secondary={
                <React.Fragment>
                  {todo.description}
                </React.Fragment>
              }
            />
          </ListItem>
        )}
      </React.Fragment>
    </List>
  </div>
);

function KnowledgeList(props) {
  const { classes } = props;
  return (
    <div>
      <Connect query={graphqlOperation(queries.listTodos)}>
        {({ data: { listTodos } }) =>
          <div> {
            listTodos && listTodos.items.map ? (
              <ListView todos={listTodos.items} />
            ) : (
                <h3> Loading </h3>
              )} </div>
        }
      </Connect>
    </div>
  );
}

KnowledgeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KnowledgeList);