import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Cards({dato}) { //prop va entre llaves

  function isActive(isActive) {

    if (isActive) {
      return 'badge bg-success';
    } else {
      return 'badge bg-danger';
    }
  
  }
  let estaActivo = isActive(dato.active);
  return (
    <div className="Cards"  id='Cards'>
       <main className="container">
        <div id="imgs">
        <div className="col-sm-6"><div className="card mb-3" >
            <h5 className="card-header">{dato.name}</h5>
            <img src={dato.flickr_images} className="card-img-top" alt="..."/>
           
            <div className="card-body">
              <p className="card-text">{dato.description}</p>
              <ul className="list-group list-group-flush">
              <li className="list-group-item"> <span className="badge bg-warning">Type: {dato.type}</span>
               <span className={estaActivo} >Is active: {dato.active}</span>
               <span className="badge bg-primary">Crew capacity: {dato.crew_capacity}</span></li>
              </ul>
            </div></div>
          </div>
        </div>
      </main>
     
    </div>
  );

  
}
