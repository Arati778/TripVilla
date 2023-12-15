import React from "react";
import "../components/TripStyle.css";
import trip1 from "../assets/jagannath--Vs66o68.jpg";
import trip2 from "../assets/tikarpada-2AzuGz9e.jpg";
import trip3 from "../assets/samaleswari-Qw8ZZDkp.jpg"
import Trip from "./Trip";

const datatrip = [
  {
    img: trip1,
    heading: "Shree Mandira",
    text: "Puri Jagannath Temple, in Puri, Odisha, India, is dedicated to Lord Jagannath, a form of Lord Vishnu. A vital pilgrimage site with annual Rath Yatra, it's known for its Kalinga-style architecture, including a towering spire. Devotees believe visiting holds deep spiritual significance.",
  },
  {
    img: trip2,
    heading: "Tikarpada",
    text: "Satakosia Tikarpada, in Angul district, Odisha, India, is known for scenic beauty and diverse wildlife. Part of the Satakosia Gorge along the Mahanadi River, it offers captivating landscapes and rich flora and fauna. Recognized for ecotourism, it invites exploration through river cruises, bird watching, and wildlife encounters.",
  },
  {
    img: trip3,
    heading: "Maa Samalei Mandira",
    text: "Samaleswari Temple, in Sambalpur, Odisha, India, stands as a revered site for its rich history and religious significance. Dedicated to Goddess Samaleswari, it draws pilgrims with its cultural heritage. The temple's unique architecture and spiritual ambiance symbolize deep devotion, making it a cherished destination for devotees and tourists alike.",
  },
];

const TripData = () => {
  return (
    <>
      <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destination using Gooogle Maps.</p>
      
      <div className="tripcard">
        {datatrip.map(( item, index) => (
            <Trip key={index} item={item}/>
        ))}
        </div>
      </div>
    </>
  );
};

export default TripData;
