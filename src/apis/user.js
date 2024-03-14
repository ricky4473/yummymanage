import {request} from '../utils'


export const getUserList=(id='',method="GET",data={})=>{
return request({
    url:`/users/${id}`,
    method,
    data,
})
}


export const getOrderList=(id='',method="GET",data={})=>{
    return request({
        url:`/orders/${id}`,
        method,
        data,
    })
    }

export const getProductList=(id='',method="GET",data={})=>{
    return request({
        url:`/products/${id}`,
        method,
        data,
    })
    }