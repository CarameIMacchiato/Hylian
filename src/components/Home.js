import React from "react"
import Team from "./team"
import Intro from "./intro"
import Solution from "./solution"
import Problem from "./problem"

const Home = () => {
    
    return (
        <main>
            <Intro ></Intro >
            <Problem></Problem>
            <Solution></Solution>
            <Team></Team>
        </main>
    )
}

export default Home