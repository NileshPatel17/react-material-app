import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import Paper from 'material-ui/Paper';
import { pink500 } from 'material-ui/styles/colors';

const errrorText='';
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pink500
    },
    avatar: {
        margin: '1em',
        textAlign: 'center'
    },
    form: {
        padding: '0 2em 1em 2em'
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    submitButton: {
        marginTop: '30px'
    },
    error: { 
        textAlign: 'left' 
    }
};
const paperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // width: '100%',
    textAlign: 'center',
    display: 'inline-block'
};
export default () => {
    return (
        <div style={styles.main}>
            <Paper style={paperStyle} zDepth={1}>
                <div style={styles.avatar}>
                    <Avatar backgroundColor={pink500} icon={<LockIcon />} size={60} />
                </div>
                <form>
                    <div style={styles.form}>
                        <div style={styles.input}>
                            <TextField floatingLabelText="User Name" />
                        </div>
                        <div style={styles.input}>
                            <TextField type="password" errorText={errrorText} errorStyle={styles.error} floatingLabelText="Password" />
                        </div>
                        <div style={styles.submitButton}>
                            <RaisedButton type="submit" primary label="Sign In" fullWidth />
                        </div>
                    </div>
                </form>
            </Paper>
        </div>
    );
};
