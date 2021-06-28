import React,{useState , useEffect , Fragment} from 'react';
import {Container, Divider, Grid, List} from 'semantic-ui-react';
import axios from 'axios';
import { IAdresaF } from '../models/adresaF';

import Faturimi from './FaturimiLayout/Faturimi';
//import './styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './DashboardLayout/dashboard';


const App = () => { 


    return (
      <BrowserRouter>
        <div className="container">
          <h3 className="m-3 d-flex justify-content-center">
            React JS Tutorial
          </h3>

          <Switch>
            <Route path="/" exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/faturimi" component={Faturimi} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
 

export default App;
