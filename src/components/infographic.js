import React from "react"
import "./layout.css"
import graphic from "../images/CapstoneInfographic-02.png"

const Infographic = () => {
    return (
        <div>
<<<<<<< HEAD
            <div class="skewed-right" style={{background: '#657984', paddingTop: '10px', height: '100px'}}></div>
            <div style={{position: 'relative', background: '#657984', height: '67rem', width: '100%', zIndex: '0', paddingTop: '5rem', paddingBottom: '5rem'}}>
=======
            <div className="skewed-right" style={{background: '#657984', paddingTop: '10px', height: '100px'}}></div>
            <div style={{position: 'relative', background: '#657984', height: '57rem', width: '100%', zIndex: '0', paddingTop: '5rem'}}>
>>>>>>> 74613e421927ff4b829cce3bababb501a4df1e0b
                <a href={graphic} target="_blank">
                    <img src={graphic} alt={'accessible gaming infographic'} style={{display: 'block', margin: 'auto', width: '70%'}}></img>
                </a> 
            </div>
        </div>
    )
}

export default Infographic