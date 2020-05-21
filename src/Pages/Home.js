import React from "react"
import "./styles/Home.css"
import Astronauta from "../assets/astronauts.svg"
import Platzilogo from "../assets/platziconf-logo.svg"
import { Link } from "react-router-dom"

class Home extends React.Component{


    render() {
        return (
            <div className="Home ">
                <div className="Home__col m-auto">
                    <img src={Platzilogo} alt=""/>
                    <h1>Print your Badges</h1>
                    <p> The easiest way to manage your <br/> conference</p>
                       
                        <Link to="/badges" className="btn btn-primary"> Start Now </Link>
                           

                      
                    
                 </div>
                    <div className="Home__col m-auto">
                    <img src={Astronauta} alt=""/>
                    
                    </div>
               
            </div>
        )
    }
}

export default Home