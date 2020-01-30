import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

    const [data, setData] = useState('');


   
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api'
      );
      console.log(result, result.data)
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* {{'data'}} */}
    </div>
  );
}

export default App;
