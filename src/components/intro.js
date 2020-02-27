import React from "react"

const Intro = () => {
    
    return (
        <div className='ImgHome' id="home">
            <h1 style={{margin: '8rem', marginTop: 0, paddingTop: '10rem' , maxWidth: 500, color: 'white'}}>
                Play games that match your abilities.
            </h1>
            <p style={{margin: '8rem', maxWidth: 500, color: 'white',}}>
                We are a team created at the University of Washington created to solve the issue of
                accessibility in video games. We have chosen to work with the game Dark Souls 3 and 
                we are creating a mod that would allow users with disabilities to play their games with
                more ease.  
            </p>
            <div style={{display:"flex"}}>
                <div style={{justifyContent: "center"}}>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Intro