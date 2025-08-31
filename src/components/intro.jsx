import Typewriter from "./Typewriter"
import Image from "next/image";

export default function Intro() {
    return (
        <div className="container-fluid" >
        <div id="intro" className="container">
            <div className="row container d-flex align-items-center px-5" style={{ minHeight: "100vh" }}>
                <div className="col-sm-12 col-md-7 text-start ps-5 py-5 text-white">
                    <h1 className="display-5">Hey,<br /> I am <b>Emirhan Tandogan</b></h1> 
                    <div>
                      <Typewriter words={['Computer Scientist', 'Full-Stack Developer', 'Game Developer']} />
                    </div>
                    <div className="pt-2">
                      <i className="bi bi-geo-alt-fill"></i><span className="ps-2">Milano, Italy</span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 text-center py-5 text-white">
                  <Image src="./images/profile.jpg" className="img-fluid rounded-4 shadow" width={600} height={600} style={{ width: "30vh" }} alt="Profile"/>
                  <p className="lead pt-4"> Full Stack & Game Developer with a strong background in AI and Data Science. Experienced in building scalable web systems, multiplayer games, and intelligent agents. Passionate about combining creativity and technology to deliver impactful, high-performance solutions. </p>
                  <a href="#about" className="btn btn-outline-light rounded-pill px-4 py-2">
                    <i className="bi bi-caret-down-fill"></i> More About Me
                  </a>
                </div>
            </div>
        </div>
      </div>
    )
}