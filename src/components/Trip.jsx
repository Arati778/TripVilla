import React from 'react';
import "../components/TripStyle.css";

const Trip = ({ item }) => {
  return (

    <div className="trip-card">
      <div className="trip-image">
        <img src={item.img} alt="Trip" />
       </div>
            <h4>{item.heading}</h4> 
        <p>{item.text}</p>
        
        
    
      
    </div>
  );
}

export default Trip;
