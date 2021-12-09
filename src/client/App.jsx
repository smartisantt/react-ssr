import React from 'react';
import '../assets/global.css'
import {BrowserRouter as Router} from 'react-router-dom'
import RouteApp from '../routes/RouteApp';

export default function App() {
  return <Router>
    <RouteApp />
  </Router>;
}
