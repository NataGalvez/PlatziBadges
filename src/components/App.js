import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import BadgeNew from "../Pages/BadgeNew"
import Badges from "../Pages/Badges"
import Layout from "../components/Layout"
import NotFound from "../components/NotFound"
import Home from "../Pages/Home"
function App(){
    return(
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path= "/" component = {Home}/>
                <Route exact path= "/badges" component = {Badges}/>
                <Route exact path= "/badges/New" component = {BadgeNew}/>
                <Route  component = {NotFound}/>
            </Switch>
            </Layout>
        
        </BrowserRouter>

        
        

    
    )
}

export default App