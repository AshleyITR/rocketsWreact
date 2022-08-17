import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Cards() {


  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/dragons`) 
      .then(response => response.json()) 

      .then(function (data) {
        console.log(data);
        

        data.map(function (dato) {
          setResponse(dato);
        });


      }
      )   

      .catch(err => console.log('Solicitud fallida', err)); 

  }, []);



  return (
    <div className="Cards">
      <main className="container">
        <h1 className="text-warning" id="capsuleName">Capsules</h1>
        <div id="imgs">
        <div className="col-sm-6"><div className="card mb-3" >
            <h5 className="card-header">{response.dato.name}</h5>
            <img src={response.dato.flickr_images} className="card-img-top" alt="..."/>
           
            <div className="card-body">
              <p className="card-text">{response.dato.description}</p>
              <ul className="list-group list-group-flush">
              <li className="list-group-item"> <span className="badge bg-warning">Type: {response.dato.type}</span>
               <span className={response.estaActivo}>Is active: {response.dato.active}</span>
               <span className="badge bg-primary">Crew capacity: {response.dato.crew_capacity}</span></li>
              </ul>
            </div></div>
          </div>
        </div>
      </main>


    </div>
  );
}
