import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {User} from "~/server/database/model/User";


interface Request {
    username: string
}
interface Response {
    deleted: boolean;
}
export default defineAuthorizedEventHandler(Role.ADMIN, async (event) => {
    const { username } = await readBody(event) as Request;
    return {
        deleted: (await User.destroy({
            where: {
                username
            }
        })) === 1
    } as Response
})