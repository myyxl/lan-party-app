import { SignJWT } from "jose";
import  bcrypt from "bcrypt";
import {select, where} from "~/server/db/databasewrapper";

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
    const rows = await select<DatabaseRow>('users', ['password_hash', 'role'], where(['username'], [body.username]));
    if(rows.length !== 1) throw createError({ statusCode: 500 });
    const hash = rows[0].password_hash as string;
    const role = rows[0].role as string;
    const match = await bcrypt.compare(body.password, hash);
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