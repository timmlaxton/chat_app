import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
      margin: '50px',
      padding: theme.spacing(3, 2),
  },
  flex: {
    display: 'flex',
    alignItem: 'center'


  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'

  },
  chatWindow: {
      width: '70%',
      height: '300px',
      padding: '10px'
  },
  chatBox: {
      width: '85%'
  },
  button: {
      width: '15%'
  }
}));

export default function Dashboard() {

  const classes= useStyles();

  return (
    <div>
    <Paper className={classes.root}>
      <Typography variant="h3" component="h3">
        Chat App
      </Typography>
      <Typography variant="h5" component="h5">
        Topic Placeholder
      </Typography>
      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
        <List>
        {
          ['topic'].map(topic => (
            <ListItem key={topic} button>
              <ListItemText primary={topic} />
            </ListItem>
          ))
        }

        </List>
      </div>
      <div className={classes.chatWindow}>
      {
        [{from: 'user', msg: 'alright'}].map((chat, i) => (
          <div className={classes.flex} key={i}>
          <Chip label={chat. from} className={classes.chip} />
          <Typography variant='p'>{chat.msg}</Typography>
          </div>
        ))
      }
      </div>
      </div>
      <div className={classes.flex}>
      <Button variant="contained">Send</Button>

      </div>
    </Paper>
    </div>
  )
}
