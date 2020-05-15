import React from "react";
import Navbar from '../components/navBar';
import tutorial from "../images/tutorial.png";
import context from "../images/context.png"

const cognitive = () => {


    return (
        <div>
            <Navbar/>

            <div className='mini-nav'>
                <ul>
                    <li><a href='/cognitive'>Cognitive</a></li>
                    <li><a href='/auditory'>Auditory</a></li>
                    <li><a href='/visual'>Visual</a></li>
                    <li><a href='/motor'>Motor</a></li>
                </ul>
            </div>
            
            <div style={{paddingTop: '200px', textAlign: 'left'}}>
                <div style={{width: "40%", margin: "0 auto", display: "flex", flexFlow: "row wrap"}}>
                    <div style={{flex: "0 100%"}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Current Solutions to Cognitive Problems</h2>
                        <p style={{marginTop: '10px', marginBottom: '50px'}}>
                           Solutions to cognitive issues involve adding elements to the game that will 
                           help remind the player of what they need to do and also allow the player to 
                           modify elements of the game as they see fit. Many games provide solutions 
                           but there is no standard and each game is different so it is difficult 
                           to know how effective each game is. 
                        </p>
                    </div>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h2 style={{color: "black"}}>Examples</h2>
                        <p style={{paddingTop: '10px', textAlign: 'left'}}>
                           Tutorials, and being able to toggle them
                        </p>
                        <img src={tutorial} alt={'menu with an option to toggle tutorials'}/>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'center'}}>
                            The Witcher 3’s menu screen, which has a tutorial toggle, 
                            along with other accessible options
                        </p>

                        <p style={{paddingTop: '10px', textAlign: 'left'}}>
                            Contextual in-game tips, tell players what to do in multiple places 
                            (through text in a menu and from characters in-game).
                        </p>
                        <img src={context} alt={'two images showing tracks, left one is highlighted, right one is not highlighted'}/>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'center'}}>
                            The Witcher 3 has a feature that highlights important 
                            game elements as hints to the player
                        </p>
                    </div>
                    <div style={{flex: "0 100%"}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Proposed Solutions</h2>
                        <h3 style={{color: "black", textAlign: 'center', paddingTop: '30px'}}>Slow-motion for games with action intense sequences</h3>
                        <p style={{paddingTop: '20px'}}>
                            Action intensive games or sequences, such as quick time events, can be difficult 
                            for people with cognitive-related conditions. A way for game developers to help 
                            with that problem:
                            <ul className='solution-list'>
                                <li>Slow down the content</li>
                                <li>Have an option to skip the content</li>
                                <li>Don't make the content rely on dexterity</li>
                            </ul>
                        </p>
                        <div>
                            <div style={{position:'relative', paddingBottom:'calc(56.25% + 44px)'}}>
                                <iframe src='https://gfycat.com/ifr/GreedyIdenticalBlackrussianterrier' frameborder='0' scrolling='no' width='100%' height='100%' style={{position:'absolute', top: '0', left:'0'}} allowfullscreen></iframe>
                            </div>
                            <p>
                                Regular speed
                            </p>
                            <div style={{position:'relative', paddingBottom:'calc(56.25% + 44px)'}}>
                                <iframe src='https://gfycat.com/ifr/FineHighlevelHectorsdolphin' frameborder='0' scrolling='no' width='100%' height='100%' style={{position:'absolute', top: '0', left:'0'}} allowfullscreen></iframe>
                            </div>
                            <p>
                                Slowed down 
                            </p>
                        </div>
                        <p>
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