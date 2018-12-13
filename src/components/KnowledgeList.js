import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { graphqlOperation } from "aws-amplify";
import { Connect } from 'aws-amplify-react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

  <Typography component="h4" variant="h4" gutterBottom>
    Quick hints
  </Typography>

  <Grid container spacing={24}>
         {todos.map(todo => (
          <Grid item xs={6} key={todo.id} cols={1}>
            <Card>
              <CardContent elevation={3}>
                <Typography variant="h5" component="h2">
                  {todo.name}
                </Typography>
                <Typography component="p">
                  {todo.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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