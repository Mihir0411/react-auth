
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Ride from './Component/Ride/Ride';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';



export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/ride/:rideId">
          <Ride></Ride>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
