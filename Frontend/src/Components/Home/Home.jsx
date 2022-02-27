import React from "react";
import Partners from "./Partners/Partners";
import TestComponent from "./TestComponent/Slider";

const Home = () =>{
    return(
        <div style={{ backgroundColor :"#282c34"}}>
            <TestComponent />
            <Partners />
        </div>
    )
}

export default Home;