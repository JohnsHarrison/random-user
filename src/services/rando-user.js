import axios from 'axios'
const baseURL = 'https://api.randomuser.me/'
async function fetchUser(){
    const results = await axios(baseURL)
    // console.log(results)
    return results
}
export default fetchUser