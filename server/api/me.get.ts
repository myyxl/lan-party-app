import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {User} from "~/server/database/model/User";

interface MeResponse {
    username: string,
    displayName: string,
}
export default defineAuthorizedEventHandler(Role.USER, async (event): Promise<MeResponse> => {
    const { username, display_name } = await User.findByPk(event.context.session.username, {
        rejectOnEmpty: true,
        attributes: ['username', 'display_name']
    });
    return {
        username,
        displayName: display_name
    }
})