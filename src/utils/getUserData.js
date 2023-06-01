import { getCookie } from 'cookies-next'
import { USER_TOKEN } from './constants'

const getUserData = () => {
    if (typeof window !== 'undefined') {
        const userData = getCookie(USER_TOKEN) && JSON.parse(getCookie(USER_TOKEN))
        return userData
    }
    else {
        return null
    }
}

export default getUserData