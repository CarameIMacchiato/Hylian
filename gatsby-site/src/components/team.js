import React from "react"
import "./layout.css"

const Team = () => {
    
    return (
        <div style={{display: 'flex'}} >
            <div style={{display: 'flex'}}>
                <h3>Priti Patel</h3>
                <img style={{width: '200px', height: '200px'}} src='https://images-na.ssl-images-amazon.com/images/I/61uOsjllnsL.jpg' alt='cat'/>
                <p>Paragraph about the team member</p>
            </div>
            <div style={{display: 'flex'}}>
                <h3>Alex Wong</h3>
                <img style={{width: '200px', height: '200px'}} src='https://img.chewy.com/is/image/catalog/144824_MAIN._AC_SL1500_V1566936163_.jpg' alt='cat'/>
                <p>Paragraph about the team member</p>
            </div>
            <div style={{display: 'flex'}}>
                <h3>Kiley Wong</h3>
                <img style={{width: '200px', height: '200px'}} src='https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=12026540&id=1450245&recipeId=728' alt='cat'/>
                <p>Paragraph about the team member</p>
            </div>
            <div style={{display: 'flex'}}>
                <h3>Carmelito Gutierrez</h3>
                <img style={{width: '200px', height: '200px'}} src='https://img.chewy.com/is/image/catalog/144824_MAIN._AC_SL1500_V1566936163_.jpg' alt='cat'/>
                <p>Paragraph about the team member</p>
            </div>
        </div>
    )
}

export default Team