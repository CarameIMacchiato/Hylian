import React from "react"
import "./layout.css"
import PritiImg from '../images/priti.png';
import AlexImg from '../images/alex.png';
import KileyImg from '../images/kiley.png';
import CarmImg from '../images/carm.png';


const Team = () => {
    
    return (
        <div id="teamSection">
            <div>
                <h1>The Team</h1>
            </div>
            <div class="flex-container">
                <div class="flex-item">
                    <div>
                        <img style={{width: '200px', height: '200px'}} src={PritiImg} alt='priti'/>
                        <h2>Priti Patel</h2>
                        <div>
                            <p>
                                I'm a senior double majoring in Informatics and Communications. I am a UX designer with a passion for creating accessible designs.
                                In my free time I enjoy playing video games and dancing as a part of the UW Raas team.
                            </p>
                            <p>Email: <a href="emailto:ppatel18@uw.edu" >ppatel18@uw.edu</a></p>
                        </div>
                    </div>
                </div>
                <div class="flex-item">
                    <div>
                        <img style={{width: '200px', height: '200px'}} src={AlexImg} alt='alex'/>
                        <h2>Alex Wong</h2>
                        <p>I am a fullstack software developer at UW in the Informatics department. I am currently working as the 
                            web team lead at a startup called SENSOL Systems. I enjoy playing basketball and listenting to music 
                            in my free time.
                        </p>
                        <p>Email: <a href="emailto:alwong34@uw.edu" >alwong34@uw.edu</a></p>
                    </div>
                </div>
                <div class="flex-item">
                    <div>
                        <img style={{width: '200px', height: '200px'}} src={KileyImg} alt='kiley'/>
                        <h2>Kiley Wong</h2>
                        <p>Hi! I am a graduating senior majoring in Informatics. I am not a big video game player.
                            I hope that people who like to play games but suffer from accessibility issues are 
                            able to enjoy their gaming experience. 
                        </p>
                        <p>Email: <a href="emailto:kaw29@uw.edu" >kaw29@uw.edu</a></p>
                    </div>
                </div>
                <div class="flex-item">
                    <div>
                        <img style={{width: '200px', height: '200px'}} src={CarmImg} alt='carmelito'/>
                        <h2>Carmelito Gutierrez</h2>
                        <p>
                            I am an Informatics major with a focus in Human-Computer Interaction. I am involved in research and design for this project.
                            I enjoy playing video games and would like to help other be able to more easily play games.
                        </p>
                        <p>Email: <a href="emailto:crjg@uw.edu" >crjg@uw.edu</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team