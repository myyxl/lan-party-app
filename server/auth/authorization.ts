import {EventHandler} from "h3";
import { jwtVerify } from "jose";

export enum Role {
    Admin,
    Shopper,
    User
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
                case Role.Admin:
                    if (userRole !== Role.Admin) throw createError({statusCode: 403});
                    break;
                case Role.Shopper:
                    if (userRole !== Role.Shopper && userRole !== Role.Admin) throw createError({statusCode: 403});
                    break;
                case Role.User:
                    if (userRole !== Role.Shopper && userRole !== Role.Admin && userRole !== Role.User) throw createError({statusCode: 403});
                    break;
                default:
                    throw createError({statusCode: 403})
            }
            event.context.session = payload;
        } catch (_) {
            throw createError({statusCode: 403});
        }
        return handler(event) as T
    });
}