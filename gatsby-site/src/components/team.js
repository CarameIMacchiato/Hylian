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
                    <p>Paragraph about the team member</p>
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
                    <p>I am an Informatics major with a focus in Human-Computer Interaction. I am involved in researching accessibility
                        in video games, designing mockups, and managing the schedule, etc.
                    </p>
                    <p>Email: <a href="emailto:ppatel18@uw.edu" >crjg@uw.edu</a></p>
                </div>
            </div>
        </div>
    )
}

export default Team