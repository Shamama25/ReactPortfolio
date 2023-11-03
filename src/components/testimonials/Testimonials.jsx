import "./testimonials.scss";

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.35912769.1698757556&semt=ais",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "2",
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://img.freepik.com/premium-photo/attractive-excited-young-girl-standing-isolated-white-pointing-finger-copy-space_171337-103437.jpg?w=996",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "3",
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.35912769.1698757556&semt=ais",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    },  
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
      {data.map((d)=>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img 
            className="left"
            src="assets/right-arrow.png"
            alt=""/>
            <img  
            className="user" 
            src={d.img}
            alt=""/>
            <img
            className="right" src={d.icon}  alt=""/>
          </div>
          <div className="center">
          {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
