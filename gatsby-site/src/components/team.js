import React from "react"
import "./layout.css"
import PritiImg from '../images/priti.png';
import AlexImg from '../images/alex.png';
import KileyImg from '../images/kiley.png';
import CarmImg from '../images/carm.png';


const Team = () => {
    
    return (
        <div id="teamSection">
            <h2>The Team</h2>
            <div class="flex-container">
                <div class="flex-item">
                    <h3>Priti Patel</h3>
                    <img style={{width: '300px', height: '300px'}} src={PritiImg} alt='photo of priti'/>
                    <p>Paragraph about the team member</p>
                    <p>Email: <a href="emailto:ppatel18@uw.edu" >ppatel18@uw.edu</a></p>
                </div>
                <div class="flex-item">
                    <h3>Alex Wong</h3>
                    <img style={{width: '300px', height: '300px'}} src={AlexImg} alt='photo of alex'/>
                    <p>I am a fullstack software developer at UW in the Informatics department. I am currently working as the 
                        web team lead at a startup called SENSOL Systems. I enjoy playing basketball and listenting to music 
                        in my free time.
                    </p>
                    <p>Email: <a href="emailto:ppatel18@uw.edu" >alwong34@uw.edu</a></p>
                </div>
                <div class="flex-item">
                    <h3>Kiley Wong</h3>
                    <img style={{width: '300px', height: '300px'}} src={KileyImg} alt='photo of kiley'/>
                    <p>Paragraph about the team member</p>
                    <p>Email: <a href="emailto:ppatel18@uw.edu" >kaw29@uw.edu</a></p>
                </div>
                <div class="flex-item">
                    <h3>Carmelito Gutierrez</h3>
                    <img style={{width: '300px', height: '300px'}} src={CarmImg} alt='photo of carmelito'/>
                    <p>Paragraph about the team member</p>
                    <p>Email: <a href="emailto:ppatel18@uw.edu" >crjg@uw.edu</a></p>
                </div>
            </div>
        </div>
    )
}

export default Team