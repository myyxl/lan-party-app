import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {User} from "~/server/database/model/User";
import bcrypt from "bcrypt";


interface Request {
    username: string,
    newDisplayName?: string,
    newPassword?: string,
    newRole?: string
}
export default defineAuthorizedEventHandler(Role.ADMIN, async (event) => {
    const req = await readBody(event) as Request;
    const hash = req.newPassword ? await bcrypt.hash(req.newPassword, 12) : undefined;
    await User.update({
        display_name: req.newDisplayName,
        role: req.newRole,
        password_hash: hash
    }, {
        where: {
            username: req.username
        }
    })
    return true
})