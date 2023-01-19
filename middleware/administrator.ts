import {jwtVerify} from "jose";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useCookie('auth').value || '';
    try {
        const { payload } = await jwtVerify(auth, new TextEncoder().encode('secret'));
        if(payload.role !== 'ADMIN') return abortNavigation()
    } catch (_) {
        return abortNavigation()
    }
})