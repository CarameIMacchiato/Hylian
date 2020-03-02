import React from "react"

const Intro = () => {
    
    return (
        <div className='ImgHome' id="home">
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flex: '1 100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <h1 style={{color: 'white'}}>
                            Play games that match your abilities.
                        </h1>
                        <p style={{color: 'white',}}>
                            We are a team created at the University of Washington created to solve the issue of
                            accessibility in video games. We have chosen to work with the game Dark Souls 3 and 
                            we are creating a mod that would allow users with disabilities to play their games with
                            more ease.  
                        </p>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", height: "200px"}}>
                <div style={{justifyContent: "center", width: "100%", height: "100%"}}>
                    <i style={{width: "200px"}} class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Intro