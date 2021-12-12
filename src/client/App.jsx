import React from 'react';
import '../assets/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteApp from '../routes/RouteApp';
import { Provider } from 'react-redux';
import store from '../store';


import {getMovies} from '../service/movieService'

getMovies().then(res=>{
  console.log(res);
})


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouteApp />
      </Router>
    </Provider>
  );
}
