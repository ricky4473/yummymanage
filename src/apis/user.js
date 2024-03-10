import {request} from '../utils'


export const getUserList=()=>{
return request({
    url:'/users/',
    method:'GET',
})
}


export const getUserDetail=(id,method)=>{
return request({
    url:`/users/${id}`,
    method,
})
}



export const getOrderList=()=>{

    return request({
        url:'/orders/',
        method:'GET'
    })
}

