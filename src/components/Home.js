import React from "react"
import Team from "./team"
import Intro from "./intro"
import Solution from "./solution"
import Problem from "./problem"
import Infographic from "./infographic"

const Home = () => {
    
    return (
        <main>
            <Intro ></Intro>
            <Problem></Problem>
            <Infographic></Infographic>
            <Solution></Solution>
            <Team></Team>
        </main>
    )
}

export default Home