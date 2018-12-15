import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import { graphqlOperation } from "aws-amplify";
import { Connect } from 'aws-amplify-react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import * as queries from '../graphql/queries';


const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};

const TaskList = ({ tasks }) => (
    <FormGroup>
        {tasks.map(task => (
            <FormControlLabel key={task.id}
                control={
                    <Checkbox
                        value={task.name}
                        color="primary"
                    />
                }
                label={task.description}
            />
        ))}
        <br />
    </FormGroup>
);

class CheckList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography component="h5" variant="h5" gutterBottom>
                    TODOs
                </Typography>
                    <Connect query={graphqlOperation(queries.listTaskss)}>
                        {({ data: { listTaskss } }) =>
                            <div> {
                                listTaskss && listTaskss.items.map ? (
                                    <TaskList tasks={listTaskss.items} />
                                ) : (
                                        <h3> Loading </h3>
                                    )} </div>
                        }
                    </Connect>
            </div>
        );
    }
}

CheckList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckList);