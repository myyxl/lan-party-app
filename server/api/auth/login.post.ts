import {JWTData, Role} from "~/server/auth/authorization";
import { SignJWT } from "jose";

interface LoginRequest {
    username: string,
    password: string
}
export default defineEventHandler(async (event) => {
    const body = await readBody(event) as LoginRequest;
    const token = await new SignJWT({
        username: body.username,
        role: Role.Admin
    })
        .setProtectedHeader({alg: 'HS256'})
        .sign(new TextEncoder().encode('secret'))
    setCookie(event, 'auth', token);
    return {}
});