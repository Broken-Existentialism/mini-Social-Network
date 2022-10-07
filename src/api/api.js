import axios from 'axios';

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers:{
            "API-KEY":"af2d68cf-d910-4e8d-afc6-30387b1f9ae2"
        }
    }
)

export const getUsers = (currentPage, pageSize) =>{
    return(
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    )
}

export const createFollow = (userId) =>{
    return(
        instance.post(`follow/${userId}`)
        .then(response => response.data)
    )
}

export const createUnfollow = (userId) =>{
    return(
        instance.delete(`follow/${userId}`)
        .then(response => response.data)
    )
}

export const getProfile = (userId) =>{
    return(
        instance.get(`profile/${userId}`)
        .then(response => response.data)
    )
}

export const getAuth = () =>{
    return(
        instance.get(`auth/me`)
        .then(response => response.data)
    )
}

export const getStatus = (userId)=>{
    return(
        instance.get(`profile/status/${userId}`)
    )
}