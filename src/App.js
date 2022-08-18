import './App.css';
import Cards from './components/cards/Cards';
import Banner from './components/banner/Banner';
import React from 'react';
import { useState, useEffect } from 'react'


function App() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/dragons`)
      .then(response => response.json())

      .then(function (data) {
        console.log(data);


        setResponse(data);


      }
      )

      .catch(err => console.log('Solicitud fallida', err));

  }, []);




  return (
    <div className="App">

    


      <Banner />
      <h1 className="text-warning" id="capsuleName">Capsules</h1>

      <div className='flex-row'>
        {response.map((dato) => {

          return (<Cards dato={dato} key={dato.id} />);

        })}

      </div>



    </div>
  );
}

export default App;
