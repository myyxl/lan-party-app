import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {Invoice} from "~/server/database/model/Invoice";

export default defineAuthorizedEventHandler(Role.USER, async (event) => {
    return Invoice.findAll({
        where: {
            payer: event.context.session.username,
            paid: false,
        }
    })
});