import React,{useState} from "react";
import "./index.css";
import sampleimage from "./assets/sampleimage.jpg";
const ProfileCard =({ name, bio, intialBg}) =>{ 
  const [bg, setBg] = useState(intialBg);
  return(
    <div ClassNaame="card"
    style ={{ background:bg}}
    onMouseEnter ={()=> setBg("linear-gradient(135deg, #ff9a9e, #fad0c4)")}
    onMouseLeave={() =>setBg(intialBg)}>
      <img src={sampleimage} alt={name}  className="pic"/>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default function App(){
  return(
    <div className="container">
      <ProfileCard
        name="John Doe"
        bio="A passionate developer from New York"
        intialBg="linear-gradient(135deg, #ADD8E6,#E6E6FA)"
      />
    </div>
  )
}
