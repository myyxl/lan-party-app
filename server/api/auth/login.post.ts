import { SignJWT } from "jose";
import  bcrypt from "bcrypt";
import {User} from "~/server/database/model/User";

interface LoginRequest {
    username: string,
    password: string
}

interface DatabaseRow {
    password_hash: string,
    role: string,
}
export default defineEventHandler(async (event) => {
    const body = await readBody(event) as LoginRequest;
    const { role, password_hash } = await User.findByPk(body.username, {
        rejectOnEmpty: true,
        attributes: ['password_hash', 'role']
    });
    const match = await bcrypt.compare(body.password, password_hash);
    if (!match) throw createError({statusCode: 400});
    const token = await new SignJWT({
        username: body.username,
        role: role
    })
        .setProtectedHeader({alg: 'HS256'})
        .sign(new TextEncoder().encode('secret'))
    setCookie(event, 'auth', token);
    return {}
});