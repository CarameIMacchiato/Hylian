import React from "react";
import Navbar from '../components/navBar';
import audioBox from '../images/audiosettings.png';
import subtitles from '../images/subtitles.jpg';
import indicator from '../images/indicator.png';
import "../components/layout.css";

const auditory = () => {
    
    return (
        <div>
            <Navbar/> 

            <div className='mini-nav'>
                <ul>
                    <li><a href='/Hylian/cognitivep'>Cognitive</a></li>
                    <li><a href='/Hylian/motor'>Motor</a></li>
                    <li><a href='/Hylian/auditory'>Auditory</a></li>
                    <li><a href='/Hylian/visual'>Visual</a></li>
                </ul>
            </div>
            
            <div style={{paddingTop: '200px', backgroundColor: "white", textAlign: 'center'}}>
                <div style={{width: "50%", margin: "0 auto", display: "flex", flexFlow: "row wrap"}}>
                    <div style={{flex: "0 100%"}}>
                        <h2 style={{color: 'black', textAlign: 'center'}}>Current Solutions to Auditory Problems</h2>
                        <p style={{textAlign: 'left'}}>
                        One of the most prevalent forms of impairment that affects gamers in the U.S. is auditory 
                        impairments. Over 28 millions people are affected by some form of hearing impairment in the U.S.
                        We want to to try to create a better gaming experience for all kinds of disabilites and in this 
                        particualr section we will talk about a solution for auditory disabilites. 
                        </p>
                    </div>
                    <div>
                        <h2 style={{color: 'black', textAlign: 'center'}}>Examples</h2>
                        <p style={{textAlign: 'left'}}>
                            These are some of the current solutions that are recommended for developers to accommodate 
                            gamers with auditory impairments.
                        </p> 
                            
                        <h3 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>Captions and Subtitles</h3>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'left'}}>
                            Add in close caption on dialogues, with options to turn them on an off. These text options would 
                            apply to not only dialogue between characters but also if a gamer is playing with others.
                        </p>
                        <img src={subtitles} alt='a remote with a subtitles button'></img>
                        <p>A remote with an option for subtitles.</p>

                        <h3 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>Textual and Tactile Feedback</h3>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'left'}}>
                            Provide a textual or a tactile (vibration) for feedback on the screen or with the controller. 
                            This, for example, could be when there is an enemy close by in addition to beeping that happens, 
                            a vibration could also happen and a indicator could appear on the screen.
                        </p>
                        <img src={indicator} alt='A view of the game Overwatch where there are damage indicators on the screen'></img>
                        <p>
                            A view of the game Overwatch where a player has been hit and we can see that there were damages taken
                            based on the edges of the screen.
                        </p>

                        <h3 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>Community Chat Rooms</h3>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'left'}}>
                            Another option that has been suggested through research, is having online chat rooms, instead 
                            of voice communication. This will still allow gamers to communicate and play with each other in 
                            the gaming community.
                        </p>
                        <iframe src='https://gfycat.com/ifr/ForkedHighHarpseal' frameborder='0' scrolling='no' allowfullscreen width='640' height='388'></iframe>
                        <p>An example of a chatroom in the game Call of Duty.</p>
                                
                            

                    </div>
                    <div>
                        <h2 style={{color: 'black', textAlign: 'center', paddingTop: '40px'}}>Proposed Solutions</h2>
                        <h3 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>Sound Settings</h3>
                        <p style={{textAlign: 'left'}}> 
                            A solution that we propose for people that have minimal or partial hearing 
                            loss is having an option to change the decibal levels. This would mean adding 
                            in a settings option or an extra pop up that allows the user to alter the ranges
                            in which the sounds will play in the range that they choose.
                        </p>
                        <img src={audioBox} alt='a settings box that contains audio options'></img>
                        <p>We can see that there is a setting panel here that has audio options </p>
                        <h4 style={{textAlign: 'left'}}>How to Implement</h4>
                        <p>This is a Unity lesson on Sound Effects and Scripting:</p>
                        <a href='https://learn.unity.com/tutorial/sound-effects-scripting#'>Tutorial</a>
                        <p>PseudoCode</p>
                        <h3 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>Additional Text and Indicators</h3>
                              
                        <p style={{textAlign: 'left'}}>
                            Adding in more text and indicators would also be useful for getting close to 
                            enemies, fighting, to complement the sounds that are normally used as signals 
                            to players.
                        </p>
                        <iframe src='https://gfycat.com/ifr/MelodicCourageousGraysquirrel' frameborder='0' scrolling='no' allowfullscreen width='640' height='411'></iframe>
                        <h4 style={{textAlign: 'left'}}>How to Implement</h4>
                        <p style={{textAlign: 'left'}}>
                            Here is a Youtube tutorial by Unity that walks the developer through adding subtitles to a game:
                        </p>
                        <a href="https://www.youtube.com/watch?v=1NW0BYn5KfE" style={{textAlign: 'left'}}>Tutorial for Adding Subtitles</a>
                          
                        <p style={{textAlign: 'left', paddingTop: '20px'}}>
                            Here is another Youtube tutorial on guidelines and more information about well formatted subtitles 
                            following good accessibility guidelines:
                        </p>
                        <a href="https://www.youtube.com/watch?v=4NGe4dzlukc" style={{textAlign: 'left'}}>Tutorial for Developing Games for Hard of Hearing and Deaf</a>

                    </div>

                    <div>
                        <h3 style={{color: 'black', paddingTop: '40px'}}>Sources</h3>
                        <ol className="source-list" style={{textAlign: 'left'}}>
                        <li>https://docs.microsoft.com/en-us/windows/win32/dxtecharts/accessibility-best-practices</li>
                        <li>https://www.digitaltrends.com/gaming/deaf-gamers-making-gaming-more-accessible/</li>
                        <li>https://medium.com/@jasper.stephenson/a-ux-analysis-of-first-person-shooter-damage-indicators-59ac9d41caf8</li>
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

export default auditory
