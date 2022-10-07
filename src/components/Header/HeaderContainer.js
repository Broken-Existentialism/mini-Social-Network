import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthThunkCreator } from '../../Redux/auth-reducer';

class HeaderAPI extends React.Component{

    componentDidMount(){
        this.props.getAuthThunkCreator()
    }
    
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStateToProps, {
    getAuthThunkCreator,
})(HeaderAPI)

export default HeaderContainer
