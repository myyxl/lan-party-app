import {FetchOptions} from "ofetch";

export const useAuthorizedFetch = (url: string, options?: FetchOptions) => {
    // @ts-ignore
    return useFetch(url, { ...options, headers: useRequestHeaders(['cookie'])});
}