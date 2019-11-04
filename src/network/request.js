import  axios from 'axios'
import { resolve } from 'url'
import { rejects } from 'assert'

export function request(config){
    const instance = axios.create({
        baseURL:'',
        timeout:5000
    })

    
   return instance(config)
}

// export function request(config, success, failure){
//     // 1.
//     const instance = axios.create({
//         baseURL:'',
//         timeout:5000
//     })

//     instance(config)
//         .then(res => {
//             console.log(res)
//             success(res)
//         })
//         .catch(err => {
//             console.log(err)
//             failure(err)
//         })
// }