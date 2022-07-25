import {API_URL} from "./constant"

const resHandler = (res: Response) => res.json(),
    errorhandler = (err: any) => console.log(JSON.stringify(err))

const requester = async <T = any>(url: string, options?: RequestInit) =>
    fetch(API_URL + url, options)
        .then(resHandler)
        .catch(errorhandler)

export const getter = <T>(
    url: string,
    options?: RequestInit
) => requester<T>(url, options)

export const poster = <T, K = any>(
    url: string,
    data: K
) => requester<T>(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
})

export const putter = <T>(
    url: string,
    options?: RequestInit
) => requester<T>(url, {method: "PUT", ...options})

export const deleter = <T>(
    url: string,
    options?: RequestInit
) => requester<T>(url, {method: "DELETE", ...options})
