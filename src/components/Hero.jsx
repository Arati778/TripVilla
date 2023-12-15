import React from 'react'
import "../components/HeroStyle.css"

const Hero = (props) => {
  return (
    <>
    <div className={props.cname}>
      <img className="object-fit-cover"  src={props.heroImg} alt="" />
    </div>
    <div className="hero-text" style={{textAlign: 'center'}}>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a href={props.url} className={props.btnClass}>
        {props.btnText}
    </a>
    </div>
    </>
  )
}

export default Hero
