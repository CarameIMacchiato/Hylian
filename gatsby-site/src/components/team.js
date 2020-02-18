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
                </div>
                <div class="flex-item">
                    <h3>Alex Wong</h3>
                    <img style={{width: '300px', height: '300px'}} src={AlexImg} alt='photo of alex'/>
                    <p>Paragraph about the team member</p>
                </div>
                <div class="flex-item">
                    <h3>Kiley Wong</h3>
                    <img style={{width: '300px', height: '300px'}} src={KileyImg} alt='photo of kiley'/>
                    <p>Paragraph about the team member</p>
                </div>
                <div class="flex-item">
                    <h3>Carmelito Gutierrez</h3>
                    <img style={{width: '300px', height: '300px'}} src={CarmImg} alt='photo of carmelito'/>
                    <p>Paragraph about the team member</p>
                </div>
            </div>
        </div>
    )
}

export default Team