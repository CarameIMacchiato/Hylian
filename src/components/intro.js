import React from "react"

const Intro = () => {
    
    return (
        <div className='ImgHome' id="home">
            <div style={{display: 'flex', paddingTop: '275px'}}>
                <div style={{display: 'flex', flex: '0 100%', justifyContent: 'center', verticalAlign: 'middle'}}>
                    <div style ={{width: '50%', textAlign: 'center'}}>
                        <h1 style={{color: 'white'}}>
                            Play games that match your abilities.
                        </h1>
                        <p style={{color: 'white', paddingTop: '30px'}}>
                            We are a team created at the University of Washington created to solve the issue of
                            accessibility in video games. We have chosen to work with the game Dark Souls 3 and 
                            we are creating a mod that would allow users with disabilities to play their games with
                            more ease.  
                        </p>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", paddingTop: '50px', justifyContent: 'center', alignItems: 'center'}}>
                <button>Download Now</button>
            </div>
        </div>
    )
}

export default Intro