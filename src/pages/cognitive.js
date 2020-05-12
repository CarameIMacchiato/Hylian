import React from "react";
import Navbar from '../components/navBar';
import { useStaticQuery, graphql } from "gatsby";

const cognitive = () => {


    return (
        <div>
            <Navbar/>
            
            <div style={{paddingTop: '200px', backgroundColor: "#020A0F", textAlign: 'center'}}>
                <div style={{width: "50%", margin: "0 auto"}}>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h2 style={{color: "white"}}>Current Solutions to Cognitive Problems</h2>
                        <p style={{color: "white", paddingTop: '10px'}}>
                           Solutions to cognitive issues involve adding elements to the game that will 
                           help remind the player of what they need to do and also allow the player to 
                           modify elements of the game as they see fit. Many games provide solutions 
                           but there is no standard and each game is different so it is difficult 
                           to know how effective each game is. 
                        </p>
                    </div>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h2 style={{color: "white"}}>Examples</h2>
                        <p style={{color: "white", paddingTop: '10px'}}>
                           Tutorial options 
                        </p>
                        <p>
                            image here
                        </p>
                        <p style={{color: "white", paddingTop: '10px'}}>
                            Contextual in-game tips, tell players what to do in multiple places 
                            (through text in a menu and from characters in-game).
                        </p>
                        <p>
                            image here
                        </p>
                    </div>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h2 style={{color: "white"}}>Proposed Solutions</h2>
                        <h3 style={{color: "white"}}>Slow-motion for games with action intense sequences</h3>
                        <p>
                            image and text here
                        </p>
                        <p style={{color: "white", paddingTop: '10px'}}>
                            Action intensive games or sequences (such as Quick time Events) can be difficult 
                            for people with cognitive-related conditions. A way for game developers to help 
                            with that problem is to add an option for intense sequences to be slowed down, 
                            or even skipped altogether.
                        </p>
                        <p style={{color: "white"}}>
                            Code here
                        </p>
                    </div>
                </div>
            </div>

            <footer class="footer">
                Team Hylian | iSchool Capstone 2020, This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School
                <p>We are going open source on May 31st! For inquiries contact us at <a href="emailto:kaw29@uw.edu" >kaw29@uw.edu</a></p> 
            </footer>
        </div>
    )
}

export default cognitive