import {navigateTo} from "#app";
import {jwtVerify } from 'jose';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useCookie('auth').value || '';
    try {
        await jwtVerify(auth, new TextEncoder().encode('secret'));
    } catch (_) {
        navigateTo('/login');
    }
})