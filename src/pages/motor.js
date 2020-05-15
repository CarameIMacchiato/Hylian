import React from "react";
import Navbar from '../components/navBar';
import {Link} from 'gatsby';


const motor = () => {
    
    return (
        <div>
            <Navbar/> 

            <div className='mini-nav'>
                <ul>
                    <li><Link to='cognitive'>Cognitive</Link></li>
                    <li><Link to='motor'>Motor</Link></li>
                    <li><Link to='auditory'>Auditory</Link></li>
                    <li><Link to='visual'>Visual</Link></li>
                </ul>
            </div>
            
            <div style={{paddingTop: '200px', backgroundColor: "#020A0F", textAlign: 'center'}}>
                <div style={{width: "50%", margin: "0 auto"}}>
                    <p>
                        motor stuff around here
                    </p>
                </div>
            </div>

            <footer class="footer">
                Team Hylian | iSchool Capstone 2020, This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School
                <p>We are going open source on May 31st! For inquiries contact us at <a href="emailto:kaw29@uw.edu" >kaw29@uw.edu</a></p> 
            </footer>
        </div>
    )
}

export default motor