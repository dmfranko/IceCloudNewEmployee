import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};

class CheckList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography component="h5" variant="h5" gutterBottom>
                    TODOs
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedAccount"
                                color="primary"
                            />
                        }
                        label="Create Account"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedWitholding"
                                color="primary"
                            />
                        }
                        label="Update Witholding Information"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedEmergency"
                                color="primary"
                            />
                        }
                        label="Update Emergency Contacts"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedMFA"
                                color="primary"
                            />
                        }
                        label="Setup MFA on Mobile"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedHandbook"
                                color="primary"
                            />
                        }
                        label="Read employee handbook"
                    />
                </FormGroup>
            </div>
        );
    }
}

CheckList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckList);