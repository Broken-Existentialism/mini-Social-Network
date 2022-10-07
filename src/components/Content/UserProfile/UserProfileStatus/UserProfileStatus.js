import React from 'react';
import s from './UserProfileStatus.module.css'

class UserProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: 'Hello my Friends',
    }

    activateEditMode = () =>{
        this.setState(
            {
                editMode: true,
            }
        )
    }

    deactivateEditMode = () =>{
        this.setState(
            {
                editMode: false,
            }
        )
    }

    changeStatus = (e) =>{
        let text = e.target.value
        this.setState(
            {
                status: text
            }
        )
    }

    render(){
       console.log(this.state.editMode)
        return(
            <div className={s.profileDescription}>

                {this.state.editMode ? 
                    <div className={s.profileDescriptionInput}>
                        <input autoFocus={true} onChange={this.changeStatus} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>:
                    <div className={s.profileDescriptionSpan}>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                    </div>
                }

            </div>
        )
   }
}

export default UserProfileStatus