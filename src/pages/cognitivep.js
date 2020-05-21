import React from "react";
import Navbar from '../components/navBar';
import tutorial from "../images/tutorial.png";
import context from "../images/context.png"
import difficulty from "../images/difficulty.png"
import glow from "../images/glow.png"
import "../components/layout.css";

const cognitivep = () => {
    return (
        <div>
            <Navbar/>
            
            <div className='mini-nav'>
                <ul>
                    <li><a href='/Hylian/cognitive'>Cognitive</a></li>
                    <li><a href='/Hylian/motor'>Motor</a></li>
                    <li><a href='/Hylian/auditory'>Auditory</a></li>
                    <li><a href='/Hylian/visual'>Visual</a></li>
                </ul>
            </div>
            
            <div style={{paddingTop: '200px', textAlign: 'left'}}>
                <div style={{width: "50%", margin: "0 auto", display: "flex", flexFlow: "row wrap"}}>
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
                    <div style={{flex: "0 100%", marginBottom: '50px'}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Proposed Solutions</h2>
                        <div style={{marginBottom: '50px'}}>
                            <h3 style={{color: "black", textAlign: 'center', paddingTop: '30px'}}>Slow-motion for games with action intense sequences</h3>
                            <p style={{paddingTop: '20px'}}>
                                Action intensive games or sequences, such as quick time events, can be difficult 
                                for people with cognitive-related conditions. A way for game developers to help 
                                with that problem:
                                <ol style={{marginTop: '30px'}}>
                                    <li>Slow down the content</li>
                                    <li>Have an option to skip the content</li>
                                    <li>Don't make the content rely on dexterity<sub>1</sub></li>
                                </ol>
                            </p>
                            <div style={{marginBottom: '30px', marginTop: '30px'}}>
                                <p>
                                    Regular speed
                                </p>
                                <div style={{position:'relative', paddingBottom:'calc(56.25% + 44px)'}}>
                                    <iframe src='https://gfycat.com/ifr/GreedyIdenticalBlackrussianterrier' frameborder='0' scrolling='no' width='100%' height='100%' style={{position:'absolute', top: '0', left:'0'}} allowfullscreen></iframe>
                                </div>
                                <p>
                                    Slowed down 
                                </p>
                                <div style={{position:'relative', paddingBottom:'calc(56.25% + 44px)'}}>
                                    <iframe src='https://gfycat.com/ifr/FineHighlevelHectorsdolphin' frameborder='0' scrolling='no' width='100%' height='100%' style={{position:'absolute', top: '0', left:'0'}} allowfullscreen></iframe>
                                </div>
                                
                            </div>
                            <h4>Pseudocode Example</h4>
                            <pre>
                                <code>
                                    //To be implemented in the game engine's update function<br></br>
                                    <br></br>
                                    timeScale Object = 0.5; <br></br>
                                    fixedDeltaTime object = 0/02F * timeScale object; <br></br>
                                    <br></br>
                                    //To revert time back to normal <br></br>
                                    <br></br>
                                    timeScale Object = 1; <br></br>
                                    fixedDeltaTime Object = 0.02F;
                                </code>
                            </pre>
                            <h4>How To Use</h4>
                            <ol className="source-list">
                                <li>
                                    The above example uses the Unity engine’s objects, but most game 
                                    engines should have similar time objects.
                                </li>
                                <li>
                                    The code can be called whenever a sequence starts or if the players
                                    press a button.
                                </li>
                            </ol>
                            <p>
                                While slowing time down would help players handle the game’s action, it can be difficult 
                                to implement depending on the game. If it isn’t a regular mechanic in the game, 
                                then another solution is to remove the action sequence or give players a choice of 
                                difficulty.
                            </p>
                        </div>

                        <div style={{marginBottom: '50px', textAlign: 'center'}}>
                            <h3 style={{color: "black", paddingTop: '30px'}}>Difficulty ranges for games</h3>
                            <img src={difficulty} style={{width: '50%', height: '50%'}} alt={'menu showing expert difficulty'}/>
                            <p style={{paddingTop: '20px', textAlign: 'left'}}>
                                While many modern games come with scaling difficulty or difficulty modes, some games do not offer
                                the choice to players. 
                            </p>
                            <h4 style={{textAlign: 'left'}}>How To Implement</h4>
                            <p style={{textAlign: 'left'}}>
                                Any coding solution for this problem would require these changes:
                                <ol className="source-list">
                                    <li>Lower requirements for player success (points needed to pass level)</li>
                                    <li>Lower enemy health and strength if there are enemies</li>
                                    <li>Give players the choice of difficulty, maybe even the ability to change individual settings<sub>3</sub></li>
                                </ol>
                            </p>
                        </div>

                        <div style={{marginBottom: '50px', textAlign: 'center'}}>
                            <h3 style={{color: "black", paddingTop: '30px'}}>More obvious interactable items</h3>
                            <img src={glow} alt={'a book is glowing because it is unread'}/>
                            <p style={{paddingTop: '20px', textAlign: 'left'}}>
                                Some game items can be difficult to see, especially if they are placed in a chaotic scene. Some solutions to fix this
                                would be:
                                <ol className="source-list">
                                    <li>Remove nearby items or clutter</li>
                                    <li>Add more visual effects to the item<sub>1</sub></li>
                                </ol>
                            </p>
                            <h4 style={{textAlign: 'left'}}>How To Implement</h4>
                            <p style={{textAlign: 'left'}}>
                                There are various plugins and particle effects for game engines thatc an be applied to 
                                game objects.
                            </p>
                            <a href="https://www.youtube.com/watch?v=UHCwUMJOFsc" style={{textAlign: 'left'}}>Tutorial for how to make sparkles in Unity</a>
                        </div>
                    </div>

                    <div>
                        <h3 style={{color: 'black'}}>Sources</h3>
                        <ol className="source-list">
                            <li>http://gameaccessibilityguidelines.com/</li>
                            <li>Yuan, Bei, Eelke Folmer, and Frederick C. Harris. "Game accessibility: a survey." Universal Access in the 
                                Information Society 10.1 (2011): 81-100.</li>
                            <li>3. Garber, Lee. "Game accessibility: enabling everyone to play." Computer 6 (2013): 14-18.
                            </li>
                        </ol>
                    </div>
                </div>

                
            </div>

            <footer className="footer">
                Team Hylian | iSchool Capstone 2020, This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School
                <p>We are going open source on May 31st! For inquiries contact us at <a href="emailto:kaw29@uw.edu" >kaw29@uw.edu</a></p> 
            </footer>
        </div>
    )
}

export default cognitivep