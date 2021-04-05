
import { AppBar, makeStyles, Typography } from '@material-ui/core';
import './App.css';
import Notification from './components/Notification';
import Option from './components/Option';
import VideoPlayer from './components/VideoPlayer';
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
function App() {
  const classes = useStyles()
  
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">Peer Meet</Typography>
      </AppBar>
      <VideoPlayer/>
      {/* Option */}
      <Option>
          <Notification/>
      </Option>
    </div>
  );
}

export default App;
