import React from "react"

const Problem = () => {
    
    return (
        
        <div id="problemSection" style={{width: "100%", backgroundColor: "#1C1F2D", paddingTop: "5rem", paddingBottom: "10rem"}}>
            <div>
                <h1 style={{color: "white"}}>Problems in Game Accessibility</h1>
            </div>
            <div style={{width: "50%"}}>
                <div style={{flex: "0 100%", textAlign: 'center'}}>
                    <p style={{ color: "white"}}>
                        A lack of accessibility in video games lead to certain demographics being excluded from games others can normally play. 
                        <b> 92%</b> of gamers with disabilities still play videogames regardless of issues that may arise from this. Video game companies often do not do enough to make their
                        video games accessible to all players.
                    </p>
                    <p style={{color: "white", paddingTop: '10px'}}>
                        Regardless of whether or not you are someone with a disability or not, creating a more accessible platform increases the ability for a wider inclusive community to exist. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Problem