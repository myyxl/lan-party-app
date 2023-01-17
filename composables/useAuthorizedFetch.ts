export const useAuthorizedFetch = (url: string) => {
    // @ts-ignore
    return useFetch(url, { headers: useRequestHeaders(['cookie'])});
}