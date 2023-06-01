import { getCookie } from "cookies-next";
import { USER_TOKEN } from "./constants";

const userToken = getCookie(USER_TOKEN) && JSON.parse(getCookie(USER_TOKEN))
const getHeader = (formData = false) => {
    const header = {
        headers: formData ? {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${userToken?.token}}`
        } : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken?.token}`
        }
    }
    return header;
}

export default getHeader;