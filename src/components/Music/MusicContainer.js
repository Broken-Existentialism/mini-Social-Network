import React from 'react';
import { connect } from 'react-redux';
import { textChange } from '../../Redux/music-reducer';
import Music from './Music';

class MusicApi extends React.Component{

    render(){
        return(
            <Music 
                musicText = {this.props.musicText}
                textChange = {this.props.textChange}
            />
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        musicText: state.musicPage.musicText
    }
}

const MusicContainer = connect(mapStateToProps,{
    textChange,
}
)(MusicApi)

export default MusicContainer