import React from "react";
import "../components/DestinationStyle.css"

const Destination = ({ item }) => {
  return (
    <>
     

        <div className={item.className}>
          <div className="text">
            <h2>{item.heading}</h2>
            <p>
              {item.text}
            </p>
          </div>
          <div className="image">
            <img src={item.img} alt="img" />
            <img src={item.img1} alt="img" />
          </div>
        </div>
    

        
      
    </>
  );
};

export default Destination;
