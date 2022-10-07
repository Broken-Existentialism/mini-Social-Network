import React from "react"
import { connect } from "react-redux";
import {Route, Switch, Redirect} from 'react-router-dom';
import  {authRoutes, /*publicRoutes*/}  from "../Routings/Routings"


const Navigation = (props) =>{
    return(
       <Switch>
            {/*props.isAuth &&*/ authRoutes.map((route,index) => 
                <Route key={index} path={route.path} render={()=>route.component} exact/>
            )}
            
            {/*publicRoutes.map((route,index)=>
                <Route key={index} path={route.path} render={()=>route.component} exact/>
            )*/}
           
            <Redirect to='/404'/>
       </Switch>
    )
}

const mapStateToProps = (state) =>{
    return(
        {
            isAuth: state.auth.isAuth
        }
    )
}

const NavigationContainer = connect(mapStateToProps,{})(Navigation)

export default NavigationContainer