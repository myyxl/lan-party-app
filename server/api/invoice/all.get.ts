import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {Invoice} from "~/server/database/model/Invoice";

export default defineAuthorizedEventHandler(Role.ADMIN, async (event) => {
    return Invoice.findAll({
        where: {
            paid: false,
        }
    })
});