import React from 'react';
import preloader from '../../../assets/images/loading.svg';
import s from './Preloader.module.css';

const Preloader = (props) =>{
    return (
        <div className={s.preloaderBody}> <img src={preloader}></img> </div> 
    )
}

export default Preloader