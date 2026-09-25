export const setItem = (key: string, value: string) => {
    try {
        window.localStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

export const getItem = (key: string): string => {
    try {
        const data = window.localStorage.getItem(key)
        if (data !== null){
            return data
        }
        return ""
    } catch (e) {
        console.log(e)
        return ""
    }
}