import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Auth } from "aws-amplify";
import Typography from '@material-ui/core/Typography';

import WelcomeCard from './WelcomeCard'


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

function Welcome(props) {
    const { classes } = props;
    return (
        <div className={classes.root}> 
            <Typography variant="h2" gutterBottom>
                Welcome to IceCloud {Auth.user.username}!
            </Typography>
            We're very exited to have you join the team.  
            Please use this app to familiarize yourself with the organization and get familiarized.
            You can also chat with Mr. IceCloud who can answer common questions.
            <br /><br />
            <WelcomeCard />
        </div>
    );
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);