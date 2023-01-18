import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {User} from "~/server/database/model/User";

export default defineAuthorizedEventHandler(Role.ADMIN, async (event) => {
    return await User.findAll({
        attributes: ['username', 'display_name', 'role']
    });
})