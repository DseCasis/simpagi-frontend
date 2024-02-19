import axios from "axios";

const URL_USERS = 'http://127.0.0.1:8000/api/users';

let token = null

export const setToken=(newToken)=>{
    token = `Bearer ${newToken}`
}

/*****************************************************************
 ***************         SERVICE USER        *******************
 *****************************************************************/


export const createUser =(formData)=>{
    const request = axios.post(`${URL_USERS}`, formData,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}


export const getUsers =()=>{
    const request = axios.get(`${URL_USERS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateUser =(user)=>{
    const request = axios.put(`${URL_USERS}-update`,user,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyUser =(id)=>{
    const request =  axios.delete(`${URL_USERS}/${id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         LOGOUT        *******************
 *****************************************************************/
export const logout = ()=>{
    const request = axios(`http://127.0.0.1:8000/api/logout`, {
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}