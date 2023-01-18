import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {User} from "~/server/database/model/User";
import bcrypt from "bcrypt";


interface Request {
    username: string,
    displayName: string,
    password: string,
    role?: string
}
export default defineAuthorizedEventHandler(Role.ADMIN, async (event) => {
    const req = await readBody(event) as Request;
    const hash = await bcrypt.hash(req.password, 12)
    await User.create({
        username: req.username,
        role: req.role,
        display_name: req.displayName,
        password_hash: hash
    })
    return true
})