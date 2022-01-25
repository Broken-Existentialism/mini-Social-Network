import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow } from '../../Redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPI extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then (response =>{
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then (response =>{
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render()
    {
        return( <>
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
*/

const UsersContainer = connect (mapStateToProps, {
    follow, 
    setCurrentPage, 
    setIsFetching, 
    setTotalUsersCount, 
    setUsers, 
    unfollow
})(UsersAPI)

export default UsersContainer