import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";

interface InfoRequest {
    startDate: string,
    endDate: string,
    city: string,
    address: string
}

export default defineAuthorizedEventHandler(Role.ADMIN, (event) => {

});