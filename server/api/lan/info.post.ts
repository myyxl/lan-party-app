import {defineAuthorizedEventHandler, Role} from "~/server/auth/authorization";

interface InfoRequest {
    date: string,
    city: string
}

export default defineAuthorizedEventHandler(Role.Admin, (event) => {

});