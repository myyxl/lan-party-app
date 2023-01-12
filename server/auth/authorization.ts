import jwt from 'jsonwebtoken';
import {EventHandler} from "h3";

export enum Role {
    Admin,
    Shopper,
    User
}

export interface UserSession {
    username: string,
    role: Role
}

export function defineAuthorizedEventHandler<T>(eventRole: Role, handler: EventHandler<T>): EventHandler<T> {
    return defineEventHandler((event): T => {
        const jwtToken = getCookie(event, 'auth') || '';
        jwt.verify(jwtToken, 'secret', (error, decoded) => {
            if(!decoded) throw createError({ statusCode: 403 });
            const userRole = (decoded as UserSession).role;
            switch (eventRole) {
                case Role.Admin: if(userRole !== Role.Admin) throw createError({ statusCode: 403 }); break;
                case Role.Shopper: if(userRole !== Role.Shopper && userRole !== Role.Admin) throw createError({ statusCode: 403 }); break;
                case Role.User: if(userRole !== Role.Shopper && userRole !== Role.Admin && userRole !== Role.User) throw createError({ statusCode: 403 }); break;
                default: throw createError({ statusCode: 403 })
            }
            event.context.session = decoded as UserSession;
        });
        return handler(event) as T
    });
}