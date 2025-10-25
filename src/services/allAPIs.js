import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// add resume : POST, reqBody

export const addListAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/list`,reqBody)
}

// add planning : POST, reqBody

export const addListPlanningAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/planning`,reqBody)
}
// add watching : POST, reqBody

export const addListWatchingAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/watching`,reqBody)
}
// add watching : POST, reqBody

export const addListCompletedAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/completed`,reqBody)
}
// add onhold : POST, reqBody

export const addListOnHoldAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/onhold`,reqBody)
}
// add onhold : POST, reqBody

export const addListDroppedAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/dropped`,reqBody)
}

// get list :

export const getListAPI = async()=>{
    return await commonAPI('get',`${serverURL}/list`,"")
}
// get list :

export const getListPlanningAPI = async()=>{
    return await commonAPI('get',`${serverURL}/planning`,"")
}
// get watching list :

export const getListWatchingAPI = async()=>{
    return await commonAPI('get',`${serverURL}/watching`,"")
}
// get watching list :

export const getListCompletedAPI = async()=>{
    return await commonAPI('get',`${serverURL}/completed`,"")
}
// get onhold list :

export const getListOnHoldAPI = async()=>{
    return await commonAPI('get',`${serverURL}/onhold`,"")
}
// get dropped list :

export const getListDroppedAPI = async()=>{
    return await commonAPI('get',`${serverURL}/dropped`,"")
}

// get A List :

export const getAListAPI = async(id)=>{
    return await commonAPI('get',`${serverURL}/list/${id}`,"")
}

// update A List :

export const editListAPI = async(id,reqBody)=>{
    return await commonAPI('put',`${serverURL}/list/${id}`,reqBody)
}
// update A List :

export const editListPlanningAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/planning`,reqBody)
}
// update A List :

export const editListWatchingAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/watching`,reqBody)
}
// update A List :

export const editListCompletedAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/completed`,reqBody)
}
// update A List :

export const editListOnHoldAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/onhold`,reqBody)
}
// update A List :

export const editListDroppedAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/dropped`,reqBody)
}

// delete A List:

export const deleteListAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/list/${id}`,"")
}
// delete A List:

export const deleteListPlanningAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/planning/${id}`,"")
}
// delete A List:

export const deleteListWatchingAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/watching/${id}`,"")
}
// delete A List:

export const deleteListCompletedAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/completed/${id}`,"")
}
// delete A List:

export const deleteListDroppedAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/dropped/${id}`,"")
}
// delete A List:

export const deleteListOnHoldAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/onhold/${id}`,"")
}
// // delete history :

// export const deleteHistoryAPI = async(id)=>{
//     return await commonAPI('delete',`${serverURL}/history/${id}`,"")
// }

// // get A history :

// export const getAHistoryAPI = async(id)=>{
//     return await commonAPI('get',`${serverURL}/history/${id}`,"")
// }

// // update A resume :

// export const updateAHistoryAPI = async(id,reqBody)=>{
//     return await commonAPI('put',`${serverURL}/history/${id}`,reqBody)
// }