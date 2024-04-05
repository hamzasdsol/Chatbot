import React, {useEffect} from 'react';
import AppNavigation from './app/navigation/AppNavigation';
import {apiCall} from './app/api/Openai';

function App() {
  useEffect(() => {
    apiCall('What is cloud computing');
  }, []);
  return <AppNavigation />;
}

export default App;
