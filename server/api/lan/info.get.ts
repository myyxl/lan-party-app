import {defineAuthorizedEventHandler, Role} from "~/server/auth/authorization";

interface InfoResponse {
    date: string,
    city: string
}

export default defineAuthorizedEventHandler(Role.User, (event): InfoResponse => {
    return {
        date: '31.12.2023',
        city: 'Hohe-Hehlen'
    }
});