import { USER_TOKEN } from "./constants";

const userData = localStorage.getItem(USER_TOKEN) ? JSON.parse(localStorage.getItem(USER_TOKEN)) : null
const getHeader = (formData = false) => {
    const header = {
        headers: formData ? {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${userData?.token}}`
        } : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userData?.token}`
        }
    }
    return header;
}

export default getHeader;