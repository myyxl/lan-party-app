import {defineAuthorizedEventHandler, Role} from "~/server/handlers/authorization";
import {select, where} from "~/server/db/databasewrapper";

interface MeResponse {
    username: string,
    displayName: string,
}

interface DatabaseRow {
    username: string,
    displayname: string,
}

export default defineAuthorizedEventHandler(Role.USER, async (event): Promise<MeResponse> => {
    const rows = await select<DatabaseRow>('users', ['username', 'displayname'], where(['username'], [event.context.session.username]));
    if(rows.length !== 1) throw createError({ statusCode: 500 });
    return {
        username: event.context.session.username,
        displayName: rows[0].displayname
    } as MeResponse
})