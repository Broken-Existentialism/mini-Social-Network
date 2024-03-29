import React from "react";
import s from'./Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

const Users = (props) =>{

    let Unfollow = (userId) =>{
        props.unfollowThunkCreator(userId)
    }

    let Follow = (userId) =>{
        props.followThunkCreator(userId)
    }

    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize)
    let pages = []
    for(let i=1; i<=pagesCount;i++){
        pages.push(i)
        if(i === 31){
            break
        }
    }
    return(
        <div className={s.usersList}>
            <div className={s.usersPagination}>
                {
                    pages.map(p => 
                        <button key={p} onClick={()=> props.onPageChanged(p)} className={props.currentPage === p ? s.selectedPage : s.btn}>{p}</button>
                    )
                }
            </div>
            <div className={s.usersItem}>
                {
                    props.users.map(u => <div className={s.bodyBlock} key={u.id}>
                            <div className={s.bodyUser}>
                                <div className={s.image}>
                                   <NavLink to={'/profile/' + u.id}> 
                                        <img alt='Error' src={u.photos.small!= null ? u.photos.small : userPhoto }/>  
                                    </NavLink>
                                </div>
                                <div className={s.buttonFollow }>
                                    {u.followed 
                                        ?<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {Unfollow(u.id)}}> Unfollow </button>  
                                        :<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {Follow(u.id)}}> Follow </button>
                                    }
                                </div>
                            </div>
                            <div className={s.bodyInfo}>
                                <div className={s.userStatus}>
                                    <div>
                                        {u.name}
                                    </div>
                                    <div>
                                        {u.status}
                                    </div>
                                </div>
                                <div className={s.userLocation}> 
                                    <div>
                                        {"u.location.city"}
                                    </div>
                                    <div>
                                        {"u.location.country"}
                                    </div>
                                </div>
                            </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users