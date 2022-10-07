import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}> 
                <div className={s.dialogBody}>
                    <div className={s.imageDialog}>
                        <img alt='Error' src='https://sun9-24.userapi.com/impg/TAKDQHieUurcAzN-femy-lbcISq27mcD2DuAPw/3acXr0C9Kvw.jpg?size=1080x992&quality=96&sign=88c42b3d65d61287bac9fb124129f24a&type=album'></img>
                    </div>
                    <div className={s.dialogInfo}>
                        <div className={s.dialogName}>
                            {props.name}
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem