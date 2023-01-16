import {EventHandler} from "h3";
import { jwtVerify } from "jose";
import pgk from 'pg';

export enum Role {
    ADMIN,
    SHOPPER,
    USER
}

export interface JWTData {
    username: string,
    role: Role
}

export function defineAuthorizedEventHandler<T>(eventRole: Role, handler: EventHandler<T>): EventHandler<T> {
    return defineEventHandler(async (event): Promise<T> => {
        const jwtToken = getCookie(event, 'auth') || '';
        try {
            const { payload } = await jwtVerify(jwtToken, new TextEncoder().encode('secret'));
            const userRole = payload.role;
            switch (eventRole) {
                case Role.ADMIN:
                    if (userRole !== 'ADMIN') throw createError({statusCode: 403});
                    break;
                case Role.SHOPPER:
                    if (userRole !== 'SHOPPER' && userRole !== 'ADMIN') throw createError({statusCode: 403});
                    break;
                case Role.USER:
                    if (userRole !== 'SHOPPER' && userRole !== 'ADMIN' && userRole !== 'USER') throw createError({statusCode: 403});
                    break;
                default:
                    throw createError({statusCode: 403})
            }
            event.context.session = payload;
        } catch (_) {
            throw createError({statusCode: 401});
        }
        return handler(event) as T
    });
}