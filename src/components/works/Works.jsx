import "./works.scss"
import { useState } from "react";

export default function Works() {
const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PXw1Q6jgdc6naA2a--kHSWeva9lG9U8law&usqp=CAU"
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PXw1Q6jgdc6naA2a--kHSWeva9lG9U8law&usqp=CAU"
    },
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Branding",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PXw1Q6jgdc6naA2a--kHSWeva9lG9U8law&usqp=CAU"
    },  
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
  }

  return (
    <div className='works' id="works">
      <div className="slider"
      style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
      {data.map((d) => (
        <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} alt=""/>
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img src={d.img} alt=""/>
          </div>
        </div>  
      </div>
      ))}
      </div>
      <img src="assets/arrow.jpeg"  className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.jpeg"  className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
