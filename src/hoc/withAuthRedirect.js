import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const mapStateToProps = (state) =>{
    return(
        {
           isAuth: state.auth.isAuth
        }
    )
}

export const withAuthRedirect = (Component) =>{

    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    const ConnectRedirectComponent  = connect(mapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent 
}