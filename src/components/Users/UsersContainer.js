import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { follow, unfollow, setFollowingIsProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from '../../Redux/users-reducer';
import { compose } from 'redux';

class UsersAPI extends React.Component {

    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber)=>{
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize )
    }

    render()
    {
        return(
            <>
                {this.props.isFetching 
                        ?<Preloader /> 
                        : <Users 
                            totalUsersCount = {this.props.totalUsersCount}
                            pageSize = {this.props.pageSize}
                            onPageChanged = {this.onPageChanged}
                            currentPage = {this.props.currentPage}
                            users = {this.props.users}
                            unfollow = {this.props.unfollow}
                            follow = {this.props.follow}
                            followingInProgress = {this.props.followingInProgress}
                            setFollowingIsProgress = {this.props.setFollowingIsProgress}
                            followThunkCreator  = {this.props.followThunkCreator }
                            unfollowThunkCreator = {this.props.unfollowThunkCreator}
                        />
                }
            </>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
/*
let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch (followAC(userId) )
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) =>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching) =>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

let AuthRedirectComponent = withAuthRedirect (UsersAPI)

const UsersContainer = connect (mapStateToProps, {
    follow, 
    unfollow,
    setFollowingIsProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
})(AuthRedirectComponent)
*/
export default compose(
    connect (mapStateToProps, {
        follow, 
        unfollow,
        setFollowingIsProgress,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
    }),
    withAuthRedirect
)
(UsersAPI)