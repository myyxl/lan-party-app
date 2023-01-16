import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";

interface InfoResponse {
    date: string,
    city: string
}

export default defineAuthorizedEventHandler(Role.USER, (event): InfoResponse => {
    return {
        date: '31.12.2023',
        city: 'Hohe-Hehlen'
    }
});