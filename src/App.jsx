import React from 'react';
import { data } from './data/sampleData'; // Import sample data
import Datagrid from './components/Datagrid';
import './assets/styles.css';

const App = () => (
  <div className="app">
    <h1>Datagrid</h1>
    <Datagrid data={data} />
  </div>
);

export default App;
