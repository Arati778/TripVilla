import React from "react";
import tour1 from "../assets/deomali1.jpg";
import tour2 from "../assets/page_1_thumb_large.webp";
import Destination from "./Destination";
import "../components/DestinationStyle.css";

const data = [
  {
    heading: "Deomali, Koraput",
    text: "Deomali, Odisha's tallest peak, offers a scenic trek amidst lush greenery. Ideal for all hikers, the ascent unveils diverse landscapes with local guides ensuring a safe journey. An early start rewards with a sunrise spectacle at the summit. Conquer the peak, savor the triumph, and indulge in local cuisine for a perfect Deomali adventure ",
    img: tour1,
    img1: tour2 ,
    className: "both"
    },
  {
    heading: "Chilika, Puri",
    text: "Chilika, Odisha's coastal jewel, unveils a vast lagoon paradise. Short boat rides to islands offer a unique ecosystem. Nalabana Bird Sanctuary enchants bird lovers with migratory wonders. Guides ensure a seamless journey through mangrove forests. Opt for early exploration to witness tranquil waters. Chilika is a blend of nature's bounty and cultural richness. Conclude with local seafood delights for a perfect finale.",
    img: tour1,
    img1: tour2,
    className: "both-reverse"
  },
];

const DestinationData = () => {
  return (
    <div>
     <div className="destination">
        <h1>Popular Destination</h1>
        <p>Every time you open a pull request, or push new changes</p>
     {data.map((item, index) => (
        <Destination  item={item} key={index} />
     ))}
        
    </div>
    </div>
  );
};

export default DestinationData;
