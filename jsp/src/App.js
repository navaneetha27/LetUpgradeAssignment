import logo from './logo.svg';
import './App.css';
import React from 'react';


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
class App extends React.Component {
  render() {
    return(<React.Fragment>
            <Typography variant="h5" gutterBottom>
                     Welcome to React</Typography>
            <Button variant="contained" color="primary">Submit</Button>
    </React.Fragment>)
}

}
export default App;
