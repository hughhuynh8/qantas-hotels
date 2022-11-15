import React from "react"
import Summary from "./components/controls/Summary";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div>
            <Header homeUrl="/" imgUrl="../images/qantas-logo.png" altText="Qantas logo"/>
            <Summary product="hotels" quantity={5} location="Sydney"></Summary>
        </div>
    )
} 
export default App;