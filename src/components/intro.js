import React from "react"

const Intro = () => {
    
    return (
        <div className='ImgHome' id="home">
            <div style={{display: 'flex', paddingTop: '275px'}}>
                <div style={{display: 'flex', flex: '0 100%', justifyContent: 'center', verticalAlign: 'middle'}}>
                    <div style ={{width: '50%', textAlign: 'center'}}>
                        <h1 style={{color: 'white'}}>
                            Games can be made more accessible
                        </h1>
                        <p style={{color: 'white', paddingTop: '30px'}}>
                            We are a team created at the University of Washington created to solve the issue of
                            accessibility in video games. We originally chose to work with the game Dark Souls 3 and 
                            were creating a mod that would allow users with disabilities to play their games with
                            more ease. In light of Covid-19, our resources were severely limited, and we chose to pivot towards
                            researching and compiling information and guidelines about accessibility in gaming as a whole.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", paddingTop: '50px', justifyContent: 'center', alignItems: 'center'}}>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Intro